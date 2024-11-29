// SPDX-License-Identifier: MIT
pragma solidity >=0.8.24;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ETH is ERC20, Ownable {
    constructor() ERC20("ETH", "ETH") {
        // Mint initial supply to the contract deployer
    }

    // Optional: Function for the owner to mint additional tokens
    function mint(address to, uint256 amount) external {
        _mint(to, amount * 10 ** decimals());
    }

    // Optional: Function for the owner to burn tokens
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}

contract Storage {
    // Errors
    string internal ERR_INVALID_LENGTH;
    string internal ERR_STAKE_NOT_ACTIVE;
    string internal ERR_INVALID_NEW_STAKE_AMOUNT;
    string internal ERR_USER_STAKE_COMPLETED;
    string internal ERR_INVALID_USER_STAKE_OWNER;
    string internal ERR_NO_INTEREST_TO_WITHDRAW;
    string internal ERR_INTEREST_TO_WITHDRAW_COMPLETED;

    uint256 internal BASE_CONVERT;
    uint256 internal SECONDS_IN_ONE_DAY;

    // Values
    mapping(address => Stake) public stakes; // pairId => Stake
    mapping(uint256 => UserStake) public userStakes; // id => UserStake[]
    uint256 internal userStakeId;
    address public OahToken;
    // Structs

    struct Stake {
        address stakeToken;
        uint256 convertRate; // 300 = 0.3 : 1 payToken = 0.3 receiveToken
        uint256 interestRate; // 1000 = 10%
        bool isActive;
    }

    struct UserStake {
        address user;
        address stakeToken;
        uint256 stakeAmount;
        uint256 interestRate;
        uint256 receiveAmount;
        uint256 interestAmount;
        uint256 startDate;
        uint256 interestWithdrew;
        uint256 withdrawTime;
        Period period;
        bool completed;
    }

    // Enums
    enum Period {
        Days_7,
        Days_30,
        Days_60
    }

    // Events
    event StakesChanged(Stake[] _stakes);
    event UserStaked(uint256 id, UserStake _userStake);
    event UserWithdrew(uint256 id, UserStake _userStake);
    event UserClaimed(uint256 id, uint256 claimedAmount);

    // Functions
    function calculateTotalInterest(Period period, uint256 interestRate, uint256 amount)
        public
        view
        returns (uint256)
    {
        uint256 timeElapsed = 7; // days
        if (period == Period.Days_30) {
            timeElapsed = 30;
        } else if (period == Period.Days_60) {
            timeElapsed = 60;
        }
        // dailyInterestRate = interestRate / (365 * BASE_CONVERT);
        uint256 interestEarned = amount * timeElapsed * interestRate / (365 * 100 * BASE_CONVERT);

        return interestEarned;
    }
}

contract Staking is OwnableUpgradeable, PausableUpgradeable, UUPSUpgradeable, Storage {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(address _owner, address _oahToken) external initializer {
        __Ownable_init();
        __Pausable_init();
        userStakeId = 0;
        OahToken = _oahToken;
        transferOwnership(_owner);

        // Errors
        ERR_INVALID_LENGTH = "ERR_INVALID_LENGTH";
        ERR_STAKE_NOT_ACTIVE = "ERR_STAKE_NOT_ACTIVE";
        ERR_INVALID_NEW_STAKE_AMOUNT = "ERR_INVALID_NEW_STAKE_AMOUNT";
        ERR_USER_STAKE_COMPLETED = "ERR_USER_STAKE_COMPLETED";
        ERR_INVALID_USER_STAKE_OWNER = "ERR_INVALID_USER_STAKE_OWNER";
        ERR_NO_INTEREST_TO_WITHDRAW = "ERR_NO_INTEREST_TO_WITHDRAW";
        ERR_INTEREST_TO_WITHDRAW_COMPLETED = "ERR_INTEREST_TO_WITHDRAW_COMPLETED";

        // init value
        BASE_CONVERT = 100;
        SECONDS_IN_ONE_DAY = 24 * 60 * 60;
    }

    // Config functions
    function setStakes(Stake[] calldata _stake) external onlyOwner {
        for (uint256 i = 0; i < _stake.length; i++) {
            Stake memory stake = _stake[i];
            stakes[stake.stakeToken] = stake;
        }

        emit StakesChanged(_stake);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    // User functions
    function newStake(address _stakeToken, uint256 _amount, Period _period) public payable whenNotPaused {
        Stake memory stake = stakes[_stakeToken];
        require(stake.isActive, ERR_STAKE_NOT_ACTIVE);
        IERC20Upgradeable stakeToken = IERC20Upgradeable(stake.stakeToken);

        if (stake.stakeToken != address(0)) {
            stakeToken.transferFrom(msg.sender, address(this), _amount);
        } else {
            require(_amount == msg.value, ERR_INVALID_NEW_STAKE_AMOUNT);
        }

        uint256 receiveAmount = stake.convertRate * _amount / BASE_CONVERT;
        uint256 totalInterest = calculateTotalInterest(_period, stake.interestRate, _amount);
        uint256 id = userStakeId++;
        UserStake memory userStake = UserStake({
            user: msg.sender,
            stakeToken: stake.stakeToken,
            stakeAmount: _amount,
            receiveAmount: receiveAmount,
            interestAmount: totalInterest,
            interestRate: stake.interestRate,
            period: _period,
            startDate: block.timestamp,
            interestWithdrew: 0,
            withdrawTime: 0,
            completed: false
        });
        userStakes[id] = userStake;

        emit UserStaked(id, userStake);
    }

    function withdraw(uint256 id) public payable {
        UserStake storage userStake = userStakes[id];
        require(!userStake.completed, ERR_USER_STAKE_COMPLETED);
        require(userStake.user == msg.sender, ERR_INVALID_USER_STAKE_OWNER);

        if (userStake.stakeToken == address(0)) {
            payable(msg.sender).transfer(userStake.stakeAmount);
        } else {
            IERC20Upgradeable stakeToken = IERC20Upgradeable(userStake.stakeToken);
            stakeToken.transfer(msg.sender, userStake.stakeAmount);
        }

        userStake.completed = true;
        emit UserWithdrew(id, userStake);
    }

    function claim(uint256 id) public payable {
        UserStake storage userStake = userStakes[id];
        require(!userStake.completed, ERR_USER_STAKE_COMPLETED);
        require(userStake.user == msg.sender, ERR_INVALID_USER_STAKE_OWNER);
        require(userStake.interestWithdrew < userStake.interestAmount, ERR_INTEREST_TO_WITHDRAW_COMPLETED);

        // day elapsed from nearest withdrawTime
        uint256 daysElapsed = (block.timestamp - userStake.startDate) / SECONDS_IN_ONE_DAY - userStake.withdrawTime;
        require(daysElapsed > 0, ERR_NO_INTEREST_TO_WITHDRAW);

        uint256 dailyInterest = userStake.interestRate * userStake.receiveAmount / (365 * BASE_CONVERT);
        uint256 interestToWithdraw = dailyInterest * daysElapsed;
        uint256 remainingInterest = userStake.interestAmount - userStake.interestWithdrew;

        // Ensure not to exceed total interest
        if (interestToWithdraw > remainingInterest) {
            interestToWithdraw = remainingInterest;
        }
        // Transfer
        IERC20Upgradeable oahToken = IERC20Upgradeable(OahToken);
        oahToken.transfer(msg.sender, interestToWithdraw);

        userStake.withdrawTime += daysElapsed;
        userStake.interestWithdrew += interestToWithdraw;

        emit UserClaimed(id, interestToWithdraw);
    }

    // TODO: remove - testing only
    function claimMinute(uint256 id) public payable {
        UserStake storage userStake = userStakes[id];
        require(!userStake.completed, ERR_USER_STAKE_COMPLETED);
        require(userStake.user == msg.sender, ERR_INVALID_USER_STAKE_OWNER);
        require(userStake.interestWithdrew < userStake.interestAmount, ERR_INTEREST_TO_WITHDRAW_COMPLETED);

        // day elapsed from nearest withdrawTime
        uint256 daysElapsed = (block.timestamp - userStake.startDate) / 60 - userStake.withdrawTime;
        require(daysElapsed > 0, ERR_NO_INTEREST_TO_WITHDRAW);

        uint256 dailyInterest = userStake.interestRate * userStake.receiveAmount / (365 * 24 * 60 * BASE_CONVERT);
        uint256 interestToWithdraw = dailyInterest * daysElapsed;
        uint256 remainingInterest = userStake.interestAmount - userStake.interestWithdrew;

        // Ensure not to exceed total interest
        if (interestToWithdraw > remainingInterest) {
            interestToWithdraw = remainingInterest;
        }
        // Transfer
        IERC20Upgradeable oahToken = IERC20Upgradeable(OahToken);
        oahToken.transfer(msg.sender, interestToWithdraw);

        userStake.withdrawTime += daysElapsed;
        userStake.interestWithdrew += interestToWithdraw;

        emit UserClaimed(id, interestToWithdraw);
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}
}

// Step to test:
// setStakes: [["<StakeTokenAddr>",1000,1200,true]]
// mint OAH to proxy
// call newStake function
// claim-withdraw
