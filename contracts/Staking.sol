// SPDX-License-Identifier: MIT
pragma solidity >=0.8.25;

// import "hardhat/console.sol";

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";

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
    Stake[] public poolInfo;
    mapping(uint256 => mapping(address => UserStake)) public userStakes; // id => user => UserStake
    uint256 internal userStakeId;
    address public rewardToken;

    struct Stake {
        address stakeToken;
        uint256 convertRate; // amount of staked token to receive 1 reward token, 300 = 0.3 : 1 rewardToken = 0.3 stakedToken
        uint256 lockTimePeriod; // time in seconds a user has to wait
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
        uint256 accumulatedRewards;
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
    event UserStaked(address indexed user, uint256 indexed pid, uint256 amount);
    event UserWithdrew(address indexed user, uint256 indexed pid, uint256 amount);
    event UserClaimed(uint256 id, address indexed wallet, address indexed rewardToken, uint256 claimedAmount);

    uint48 public constant MAX_TIME = type(uint48).max; // = 2^48 - 1
}

contract Staking is OwnableUpgradeable, PausableUpgradeable, UUPSUpgradeable, ReentrancyGuardUpgradeable, Storage {
    using SafeERC20Upgradeable for IERC20Upgradeable;

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

    function userAccumulatedRewards(uint256 _pid, address _staker) external view returns (uint256 rewards) {
        return userStakes[_pid][_staker].accumulatedRewards;
    }

    function getUnlockTime(uint256 _pid, address _staker) public view returns (uint48 unlockTime) {
        return userStakes[_pid][_staker].stakeAmount > 0 ? toUint48(userStakes[_pid][_staker].withdrawTime) : MAX_TIME;
    }

    // Config functions. Can only be called by the owner.
    function setStakes(Period _period, IERC20Upgradeable _token) external onlyOwner {
        uint256 interestRate;
        uint256 _lockTimePeriod;
        if (_period == Period.Days_7) {
            interestRate = 1000;
            _lockTimePeriod = 7 days;
        } else if (_period == Period.Days_60) {
            interestRate = 1500;
            _lockTimePeriod = 60 days;
        } else if (_period == Period.Days_120) {
            interestRate = 2000;
            _lockTimePeriod = 120 days;
        } else {
            revert("Owner: Cannot set to this period");
        }
        Stake memory stake = Stake({
            stakeToken: address(_token),
            convertRate: 30000 * _lockTimePeriod,
            lockTimePeriod: _lockTimePeriod,
            isActive: true
        });
        poolInfo.push(stake);
    }

    function set(uint256 _pid, uint256 _interestRate) public onlyOwner {
        poolInfo[_pid].convertRate = _interestRate;
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

        uint256 timePeriod;
        timePeriod = block.timestamp - user.startDate;

        uint48 stakeRewardEndTime = toUint48(user.startDate + stake.lockTimePeriod);

        if (block.timestamp <= stakeRewardEndTime) {
            return 0;
        } else {
            uint256 interestEarned = user.stakeAmount * BASE_CONVERT / stake.convertRate;

            return interestEarned;
        }
    }

    function userTotalRewards(uint256 _pid, address _staker) public view returns (uint256) {
        return userClaimableRewards(_pid, _staker) + userStakes[_pid][_staker].accumulatedRewards;
    }

    function getEarnedRewardTokens(uint256 _pid, address _staker) public view returns (uint256 claimableRewardTokens) {
        Stake storage stake = poolInfo[_pid];

        if (address(rewardToken) == address(0) || stake.convertRate == 0) {
            return 0;
        } else {
            return userTotalRewards(_pid, _staker) / stake.convertRate; // safe
        }
    }

    // User functions
    function _updateRewards(uint256 _pid, address _staker) internal returns (UserStake storage userStake) {
        // calculate reward credits using previous staking amount and previous time period
        // add new reward credits to already accumulated reward credits
        userStake = userStakes[_pid][_staker];
        uint256 totalInterest = userClaimableRewards(_pid, _staker);
        userStake.accumulatedRewards += totalInterest;

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
            stakeToken.safeTransferFrom(msg.sender, address(this), _amount);
        } else {
            require(_amount == msg.value, ERR_INVALID_NEW_STAKE_AMOUNT);
        }

        UserStake storage userStake = _updateRewards(_pid, msg.sender); // update rewards and return reference to user

        userStake.stakeAmount = toUint160(userStake.stakeAmount + _amount);

        userStake.withdrawTime = toUint48(block.timestamp + stake.lockTimePeriod);

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
            payable(msg.sender).transfer(_amount);
        } else {
            IERC20Upgradeable stakeToken = IERC20Upgradeable(userStake.stakeToken);
            stakeToken.safeTransfer(msg.sender, _amount);
        }

        emit UserWithdrew(msg.sender, _pid, _amount);
    }

    function claim(uint256 _pid) external nonReentrant {
        require(rewardToken != address(0), "no reward token contract");
        UserStake storage userStake = userStakes[_pid][msg.sender];
        require(!userStake.completed, ERR_USER_STAKE_COMPLETED);
        require(userStake.user == msg.sender, ERR_INVALID_USER_STAKE_OWNER);

        uint256 interestToWithdraw = userClaimableRewards(_pid, msg.sender);
        require(interestToWithdraw > 0, "no tokens to claim");
        userStake.accumulatedRewards = 0;

        // Transfer
        IERC20Upgradeable oahToken = IERC20Upgradeable(rewardToken);
        oahToken.safeTransfer(msg.sender, interestToWithdraw);

        emit UserClaimed(_pid, msg.sender, rewardToken, interestToWithdraw);
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}
}
