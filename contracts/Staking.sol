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
    string internal ERR_STAKE_NOT_ACTIVE;
    string internal ERR_INVALID_NEW_STAKE_AMOUNT;

    uint256 internal BASE_CONVERT;

    // Values
    Stake[] public stakes;
    mapping(uint256 => mapping(address => UserStake)) public userStakes; // id => user => UserStake
    address public rewardToken;

    struct Stake {
        address stakeToken;
        uint256 convertRate; // amount of staked token to receive 1 reward token, 30000 = 0.3 : 1 rewardToken = 0.3 stakedToken
        uint256 lockTimePeriod; // time in seconds a user has to wait
        bool isActive;
    }

    struct UserStake {
        uint256 stakeAmount;
        uint256 startDate;
        uint256 accumulatedRewards;
        uint256 withdrawTime;
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

    event RewardTokenChanged(address indexed oldRewardToken, uint256 returnedAmount, address indexed newRewardToken);
    event DevWithdraw(address token, uint256 amount);

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
        rewardToken = _oahToken;
        transferOwnership(_owner);

        // Errors
        ERR_STAKE_NOT_ACTIVE = "ERR_STAKE_NOT_ACTIVE";
        ERR_INVALID_NEW_STAKE_AMOUNT = "ERR_INVALID_NEW_STAKE_AMOUNT";

        // init value
        BASE_CONVERT = 100000;
    }

    function poolLength() external view returns (uint256) {
        return stakes.length;
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

    function getRewardTokenBalance() public view returns (uint256 balance) {
        if (rewardToken == address(0)) return 0;
        balance = IERC20Upgradeable(rewardToken).balanceOf(address(this));
    }

    function setRewardToken(address newRewardToken) external nonReentrant onlyOwner {
        address oldRewardToken = rewardToken;
        uint256 rewardBalance = getRewardTokenBalance(); // balance of oldRewardToken
        if (rewardBalance > 0) {
            IERC20Upgradeable(oldRewardToken).safeTransfer(msg.sender, rewardBalance);
        }
        rewardToken = newRewardToken;
        emit RewardTokenChanged(oldRewardToken, rewardBalance, newRewardToken);
    }

    // Config functions. Can only be called by the owner.
    function setStakes(Period _period, IERC20Upgradeable _token) external onlyOwner {
        uint256 _lockTimePeriod;
        uint256 _interestRate;
        if (_period == Period.Days_7) {
            _lockTimePeriod = 7 days;
            _interestRate = 10;
        } else if (_period == Period.Days_60) {
            _lockTimePeriod = 60 days;
            _interestRate = 15;
        } else if (_period == Period.Days_120) {
            _lockTimePeriod = 120 days;
            _interestRate = 20;
        } else {
            revert("Owner: Cannot set to this period");
        }
        Stake memory stake = Stake({
            stakeToken: address(_token),
            convertRate: 300000 * 100 * 365 * 1 days / _interestRate, // price of OAH / APR * 365
            lockTimePeriod: _lockTimePeriod,
            isActive: true
        });
        stakes.push(stake);
    }

    function set(uint256 _pid, uint256 _convertRate) public onlyOwner {
        stakes[_pid].convertRate = _convertRate;
    }

    function sets(uint256[] calldata _pids, uint256[] calldata _convertRates) public onlyOwner {
        require(_pids.length == _convertRates.length, "length mismatch");
        for (uint256 i = 0; i < _pids.length; i++) {
            uint256 _pid = _pids[i];
            uint256 _convertRate = _convertRates[i];
            stakes[_pid].convertRate = _convertRate;
        }
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function userClaimableRewards(uint256 _pid, address _staker) public view returns (uint256) {
        UserStake storage user = userStakes[_pid][_staker];
        if (block.timestamp <= user.startDate) return 0;

        if (user.withdrawTime <= user.startDate) return 0;

        uint256 timePeriod;
        timePeriod = block.timestamp - user.startDate;

        if (block.timestamp <= user.withdrawTime) {
            timePeriod = block.timestamp - user.startDate;
        } else {
            timePeriod = user.withdrawTime - user.startDate;
        }

        return timePeriod * user.stakeAmount;
    }

    function userTotalRewards(uint256 _pid, address _staker) public view returns (uint256) {
        return userClaimableRewards(_pid, _staker) + userStakes[_pid][_staker].accumulatedRewards;
    }

    function getEarnedRewardTokens(uint256 _pid, address _staker) public view returns (uint256 claimableRewardTokens) {
        Stake storage stake = stakes[_pid];

        if (address(rewardToken) == address(0) || stake.convertRate == 0) {
            return 0;
        } else {
            return userTotalRewards(_pid, _staker) * BASE_CONVERT / stake.convertRate; // safe
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

    function newStake(uint256 _pid, uint256 _amount) external payable nonReentrant whenNotPaused {
        require(_amount > 0, "stake amount must be > 0");

        Stake storage stake = stakes[_pid];
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
        Stake storage pool = stakes[_pid];
        UserStake storage userStake = _updateRewards(_pid, msg.sender); // update rewards and return reference to user

        require(_amount <= userStake.stakeAmount, "withdraw amount > staked amount");
        userStake.stakeAmount -= toUint160(_amount);

        if (pool.stakeToken == address(0)) {
            payable(msg.sender).transfer(_amount);
        } else {
            IERC20Upgradeable stakeToken = IERC20Upgradeable(pool.stakeToken);
            stakeToken.safeTransfer(msg.sender, _amount);
        }

        emit UserWithdrew(msg.sender, _pid, _amount);
    }

    function claim() external nonReentrant {
        require(rewardToken != address(0), "no reward token contract");
        for (uint256 i = 0; i < stakes.length; i++) {
            uint256 _pid = i;
            UserStake storage userStake = userStakes[_pid][msg.sender];

            // if not exists
            if (userStake.startDate == 0) {
                continue;
            }

            uint256 interestToWithdraw = getEarnedRewardTokens(_pid, msg.sender);
            // require(interestToWithdraw > 0, "no tokens to claim");
            if (interestToWithdraw == 0) {
                continue;
            }

            userStake.accumulatedRewards = 0;
            userStake.startDate = toUint48(block.timestamp); // will reset userClaimableRewards to 0

            // Transfer
            IERC20Upgradeable oahToken = IERC20Upgradeable(rewardToken);
            oahToken.safeTransfer(msg.sender, interestToWithdraw);
            emit UserClaimed(_pid, msg.sender, rewardToken, interestToWithdraw);
        }
    }

    function emergencyTokenRetrieve(address token) external onlyOwner {
        uint256 i;
        for (i = 0; i < stakes.length; i++) {
            require(token != address(stakes[i].stakeToken), "Cannot withdraw LP tokens");
        }

        uint256 balance = IERC20Upgradeable(token).balanceOf(address(this));

        IERC20Upgradeable(token).safeTransfer(_msgSender(), balance);

        emit DevWithdraw(address(token), balance);
    }

    /**
     * @notice admin function to send one type of tokens to external address
     * @dev emergency use only
     * @param _amount drained token amount
     */
    function drainToken(address _to, address _token, uint256 _amount) external onlyOwner {
        if (_token == address(0)) {
            payable(_to).transfer(_amount);
        } else {
            IERC20Upgradeable(_token).safeTransfer(_to, _amount);
        }
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}
}
