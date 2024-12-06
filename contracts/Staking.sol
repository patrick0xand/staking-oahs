// SPDX-License-Identifier: MIT
pragma solidity >=0.8.25;

// import "hardhat/console.sol";

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

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
    Stake[] public poolInfo;
    mapping(uint256 => mapping(address => UserStake)) public userStakes; // id => user => UserStake
    uint256 internal userStakeId;
    address public rewardToken;

    struct Stake {
        address stakeToken;
        uint256 convertRate; // 300 = 0.3 : 1 payToken = 0.3 receiveToken
        uint256 interestRate; // 1000 = 10%
        Period period;
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
        Days_60,
        Days_120
    }

    // Events
    event StakesChanged(Stake[] _stakes);
    event UserStaked(address indexed user, uint256 indexed pid, uint256 amount);
    event UserWithdrew(address indexed user, uint256 indexed pid, uint256 amount);
    event UserClaimed(uint256 id, address indexed wallet, address indexed rewardToken, uint256 claimedAmount);

    uint48 public constant MAX_TIME = type(uint48).max; // = 2^48 - 1

    // Functions
    function calculateTotalInterest(Period period, uint256 interestRate, uint256 amount)
    public
    view
    returns (uint256)
    {
        uint256 timeElapsed = 7; // days
        if (period == Period.Days_60) {
            timeElapsed = 60;
        } else if (period == Period.Days_120) {
            timeElapsed = 120;
        }
        // dailyInterestRate = interestRate / (365 * BASE_CONVERT);
        uint256 interestEarned = amount * timeElapsed * interestRate / (365 * 100 * BASE_CONVERT);

        return interestEarned;
    }
}

contract Staking is OwnableUpgradeable, PausableUpgradeable, UUPSUpgradeable, ReentrancyGuardUpgradeable, Storage {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(address _owner, address _oahToken) external initializer {
        __Ownable_init();
        __Pausable_init();
        __ReentrancyGuard_init();
        userStakeId = 0;
        rewardToken = _oahToken;
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

    function poolLength() external view returns (uint256) {
        return poolInfo.length;
    }

    function toUint48(uint256 value) internal pure returns (uint48) {
        require(value <= type(uint48).max, "value doesn't fit in 48 bits");
        return uint48(value);
    }

    function toUint160(uint256 value) internal pure returns (uint160) {
        require(value <= type(uint160).max, "value doesn't fit in 160 bits");
        return uint160(value);
    }

    function getUnlockTime(uint256 _pid, address _staker) public view returns (uint48 unlockTime) {
        return userStakes[_pid][_staker].stakeAmount > 0 ? toUint48(userStakes[_pid][_staker].withdrawTime) : MAX_TIME;
    }

    // Config functions. Can only be called by the owner.
    function setStakes(Period _period, IERC20Upgradeable _token) external onlyOwner {
        uint256 interestRate;
        if (_period == Period.Days_7) {
            interestRate = 1000;
        } else if (_period == Period.Days_60) {
            interestRate = 1500;
        }else if (_period == Period.Days_120) {
            interestRate = 2000;
        }else {
            revert("Owner: Cannot set to this period");
        }
            Stake memory stake = Stake({
    stakeToken: _token,
    period: _period,
            interestRate: interestRate,
    isActive: true
        });
            poolInfo.push(stake);

        emit StakesChanged(_stake);
    }

    function set(uint256 _pid, uint256 _interestRate) public onlyOwner {
        poolInfo[_pid].interestRate = _interestRate;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function userClaimableRewards(uint256 _pid, address _staker) public view returns (uint256) {
        Stake storage stake = poolInfo[_pid];
        UserStake storage user = userStakes[_pid][_staker];
        if (block.timestamp <= user.startDate) return 0;
        uint256 timeElapsed = 7 days; // days
        if (stake.period == Period.Days_60) {
            timeElapsed = 60 days;
        } else if (stake.period == Period.Days_120) {
            timeElapsed = 120 days;
        }
        uint48 stakeRewardEndTime = toUint48(user.startDate + timeElapsed);

        if (block.timestamp <= stakeRewardEndTime) {
            return 0;
        } else {
            return calculateTotalInterest(stake.period, stake.interestRate, user.stakeAmount);
        }
    }

    // User functions
    function _updateRewards(uint256 _pid, address _staker) internal returns (UserStake storage userStake) {
        Stake storage stake = poolInfo[_pid];
        // calculate reward credits using previous staking amount and previous time period
        // add new reward credits to already accumulated reward credits
        userStake = userStakes[_pid][_staker];
        uint256 totalInterest = calculateTotalInterest(stake.period, stake.interestRate, userStake.stakeAmount);
        userStake.interestAmount += totalInterest;

        // update stake Time to current time (start new reward period)
        // will also reset userClaimableRewards()
        userStake.startDate = toUint48(block.timestamp);
    }

    function newStake(uint256 _pid, uint256 _amount) external nonReentrant payable whenNotPaused {
        require(_amount > 0, "stake amount must be > 0");

        Stake storage stake = poolInfo[_pid];
        require(stake.isActive, ERR_STAKE_NOT_ACTIVE);
        IERC20Upgradeable stakeToken = IERC20Upgradeable(stake.stakeToken);

        if (stake.stakeToken != address(0)) {
            stakeToken.transferFrom(msg.sender, address(this), _amount);
        } else {
            require(_amount == msg.value, ERR_INVALID_NEW_STAKE_AMOUNT);
        }

        uint256 receiveAmount = stake.convertRate * _amount / BASE_CONVERT;

        UserStake storage userStake = _updateRewards(_pid, msg.sender); // update rewards and return reference to user

        userStake.stakeAmount = toUint160(userStake.stakeAmount + _amount);

        uint256 timeElapsed = 7 days; // days
        if (stake.period == Period.Days_60) {
            timeElapsed = 60 days;
        } else if (stake.period == Period.Days_120) {
            timeElapsed = 120 days;
        }
        userStake.withdrawTime = toUint48(block.timestamp + timeElapsed);

        emit UserStaked(msg.sender, _pid, _amount);
    }

    function withdraw(uint256 _pid, uint256 _amount) external nonReentrant {
        require(_amount > 0, "amount to withdraw not > 0");
        require(block.timestamp > getUnlockTime(_pid, msg.sender), "staked tokens are still locked");

        UserStake storage userStake = _updateRewards(_pid, msg.sender); // update rewards and return reference to user

        require(_amount <= userStake.stakeAmount, "withdraw amount > staked amount");
        require(!userStake.completed, ERR_USER_STAKE_COMPLETED);
        require(userStake.user == msg.sender, ERR_INVALID_USER_STAKE_OWNER);
        userStake.stakeAmount -= toUint160(_amount);

        if (userStake.stakeToken == address(0)) {
            payable(msg.sender).transfer(userStake.stakeAmount);
        } else {
            IERC20Upgradeable stakeToken = IERC20Upgradeable(userStake.stakeToken);
            stakeToken.transfer(msg.sender, userStake.stakeAmount);
        }

        emit UserWithdrew(msg.sender, _pid, _amount);
    }

    function claim(uint256 _pid) external nonReentrant {
        require(rewardToken != address(0), "no reward token contract");
        UserStake storage userStake = userStakes[_pid][msg.sender];
        require(!userStake.completed, ERR_USER_STAKE_COMPLETED);
        require(userStake.user == msg.sender, ERR_INVALID_USER_STAKE_OWNER);
        require(userStake.interestWithdrew < userStake.interestAmount, ERR_INTEREST_TO_WITHDRAW_COMPLETED);

        uint256 interestToWithdraw = getEarnedRewardTokens(_pid, msg.sender);
        require(interestToWithdraw > 0, "no tokens to claim");
        userStake.interestAmount = 0;

        uint256 interestWithdrew = userStake.interestAmount - userStake.interestWithdrew;

        // Transfer
        IERC20Upgradeable oahToken = IERC20Upgradeable(rewardToken);
        oahToken.transfer(msg.sender, interestToWithdraw);

        userStake.interestWithdrew += interestToWithdraw;

        emit UserClaimed(_pid, msg.sender, rewardToken, interestToWithdraw);
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}
}

// Step to test:
// setStakes: [["<StakeTokenAddr>",1000,1200,true]]
// mint OAH to proxy
// call newStake function
// claim-withdraw
