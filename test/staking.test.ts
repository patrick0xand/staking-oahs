import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import {anyValue} from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import {expect} from "chai";
import {ethers, upgrades} from "hardhat";

describe("Staking", function () {
  async function deployDexFixture() {
    const [owner, addr1, otherAccount] = await ethers.getSigners();

    const USDT = await ethers.getContractFactory("MockERC20");
    const usdt = await USDT.deploy("USDTToken", "USDT");

    const OAH = await ethers.getContractFactory("MockERC20");
    const oah = await OAH.deploy("OAH Reward Token", "OAH");
    const oahAddr = await oah.getAddress();
    const newOAH = await OAH.deploy("OAH Reward Token", "OAH1");
    const newOahAddr = await newOAH.getAddress();
    const ImplStaking = await ethers.getContractFactory("Staking");
    const contract = await upgrades.deployProxy(
      ImplStaking,
      [
        owner.address, // owner
        oahAddr, // oah
      ],
      {
        initializer: "initialize",
        kind: "uups",
      }
    );
    await contract.waitForDeployment();

    // mint
    // usdt.mint(owner, 1000n ** 18n);
    await oah.mint(contract, ethers.parseEther("1000000"));

    return {contract, owner, otherAccount, addr1, usdt, oah, newOahAddr};
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const {contract, owner} = await loadFixture(deployDexFixture);

      expect(await contract.owner()).to.equal(owner.address);
    });
  });

  describe("setStakes", function () {
    it("should correctly add a new stake for Period.Days_7", async function () {
      const {contract, usdt} = await loadFixture(deployDexFixture);
      await contract.setStakes(0, usdt.target); // Period.Days_7 = 0

      const stakes = await contract.stakes(0);

      expect(stakes.stakeToken).to.equal(usdt.target);
      expect(stakes.convertRate).to.equal(
        ((300000 * 100 * 365) / 10) * 24 * 60 * 60
      ); // 7 days in seconds
      expect(stakes.lockTimePeriod).to.equal(7 * 24 * 60 * 60); // 7 days in seconds
      expect(stakes.isActive).to.equal(true);

      // poolLength
      const poolLength = await contract.poolLength();
      expect(poolLength).to.equal(1);
    });

    it("should correctly add a new stake for Period.Days_60", async function () {
      const {contract, usdt} = await loadFixture(deployDexFixture);
      await contract.setStakes(1, usdt.target); // Period.Days_60 = 1

      const stakes = await contract.stakes(0);

      expect(stakes.stakeToken).to.equal(usdt.target);
      expect(stakes.convertRate).to.equal(
        ((300000 * 100 * 365) / 10) * 24 * 60 * 60
      ); // 60 days in seconds
      expect(stakes.lockTimePeriod).to.equal(60 * 24 * 60 * 60); // 60 days in seconds
      expect(stakes.isActive).to.equal(true);
    });

    it("should correctly add a new stake for Period.Days_120", async function () {
      const {contract, usdt} = await loadFixture(deployDexFixture);
      await contract.setStakes(2, usdt.target); // Period.Days_120 = 2

      const stakes = await contract.stakes(0);

      expect(stakes.stakeToken).to.equal(usdt.target);
      expect(stakes.convertRate).to.equal(
        ((300000 * 100 * 365) / 10) * 24 * 60 * 60
      ); // 120 days in seconds
      expect(stakes.lockTimePeriod).to.equal(120 * 24 * 60 * 60); // 120 days in seconds
      expect(stakes.isActive).to.equal(true);
    });

    it("should revert if an invalid period is passed", async function () {
      const {contract, usdt} = await loadFixture(deployDexFixture);
      await expect(contract.setStakes(3, usdt.target)).to.be.reverted; // Invalid period
    });

    it("should revert if called by non-owner", async function () {
      const {contract, usdt, otherAccount} = await loadFixture(
        deployDexFixture
      );
      await expect(contract.connect(otherAccount).setStakes(0, usdt.target)) // Period.Days_7 = 0
        .to.be.revertedWith("Ownable: caller is not the owner");
    });
  });

  describe("set", function () {
    it("should update the interest rate of an existing stake", async function () {
      const {contract, usdt} = await loadFixture(deployDexFixture);
      await contract.setStakes(0, usdt.target);

      const initialstakes = await contract.stakes(0);
      expect(initialstakes.convertRate).to.equal(
        ((300000 * 100 * 365) / 10) * 24 * 60 * 60
      );

      const newInterestRate = ethers.parseUnits("1500", "wei");
      await contract.set(0, newInterestRate);

      const updatedstakes = await contract.stakes(0);
      expect(updatedstakes.convertRate).to.equal(newInterestRate);
    });

    it("should revert if non-owner tries to update interest rate", async function () {
      const {contract, usdt, otherAccount} = await loadFixture(
        deployDexFixture
      );
      await contract.setStakes(0, usdt.target);

      const newInterestRate = ethers.parseUnits("1500", "wei");
      await expect(
        contract.connect(otherAccount).set(0, newInterestRate)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });

    it("should revert if updating a non-existent pool", async function () {
      const {contract} = await loadFixture(deployDexFixture);
      const newInterestRate = ethers.parseUnits("1500", "wei");
      await expect(contract.set(999, newInterestRate)).to.be.reverted; // Non-existent pool ID
    });
  });

  describe("setRewardToken", function () {
    it("should update the interest rate of an existing stake", async function () {
      const {contract, usdt, oah, newOahAddr, owner} = await loadFixture(
        deployDexFixture
      );
      await contract.setStakes(0, usdt.target);

      // Check initial reward token
      expect(await contract.rewardToken()).to.equal(oah);

      // Get initial balances
      const ownerInitialBalance = await oah.balanceOf(owner);
      const stakingInitialBalance = await oah.balanceOf(contract);

      // Set the new reward token
      await expect(contract.connect(owner).setRewardToken(newOahAddr))
        .to.emit(contract, "RewardTokenChanged")
        .withArgs(oah, stakingInitialBalance, newOahAddr);

      // Check that the reward token has been updated
      expect(await contract.rewardToken()).to.equal(newOahAddr);

      // Check that the remaining balance of the old reward token has been returned to the owner
      const ownerFinalBalance = await oah.balanceOf(owner.address);
      expect(ownerFinalBalance - ownerInitialBalance).to.equal(
        stakingInitialBalance
      );

      // Check that the staking contract no longer holds any old reward tokens
      expect(await oah.balanceOf(contract)).to.equal(0);
    });

    it("should fail if a non-owner tries to set the reward token", async function () {
      const {contract, usdt, newOahAddr, addr1} = await loadFixture(
        deployDexFixture
      );

      await expect(
        contract.connect(addr1).setRewardToken(newOahAddr)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });

  describe("pause-unpause", function () {
    it("should pause the contract", async function () {
      const {contract} = await loadFixture(deployDexFixture);
      await contract.pause();

      const paused = await contract.paused();
      expect(paused).to.equal(true);
    });

    it("should unpause the contract", async function () {
      const {contract} = await loadFixture(deployDexFixture);
      await contract.pause();
      await contract.unpause();

      const paused = await contract.paused();
      expect(paused).to.equal(false);
    });

    it("should revert when non-owner tries to pause the contract", async function () {
      const {contract, otherAccount} = await loadFixture(deployDexFixture);
      await expect(contract.connect(otherAccount).pause()).to.be.revertedWith(
        "Ownable: caller is not the owner"
      );
    });

    it("should revert when non-owner tries to unpause the contract", async function () {
      const {contract, otherAccount} = await loadFixture(deployDexFixture);
      await contract.pause();
      await expect(contract.connect(otherAccount).unpause()).to.be.revertedWith(
        "Ownable: caller is not the owner"
      );
    });
  });

  describe("newStake", function () {
    it("should allow a user to stake tokens", async function () {
      const {contract, usdt, addr1} = await loadFixture(deployDexFixture);
      await contract.setStakes(0, usdt.target); // Period.Days_7 = 0

      const stakeAmount = ethers.parseEther("100");
      await usdt.mint(addr1, stakeAmount);
      await usdt.connect(addr1).approve(contract, stakeAmount);

      await contract.connect(addr1).newStake(0, stakeAmount);

      const userStake = await contract.userStakes(0, addr1.address);
      expect(userStake.stakeAmount).to.equal(stakeAmount);
    });

    it("should allow user to stake native coin", async function () {
      const {contract, addr1} = await loadFixture(deployDexFixture);
      await contract.setStakes(0, ethers.ZeroAddress); // Period.Days_7 = 0
      const stakeAmount = ethers.parseEther("1"); // 1 ETH

      // User stakes 1 ETH
      await expect(
        contract.connect(addr1).newStake(0, stakeAmount, {value: stakeAmount})
      )
        .to.emit(contract, "UserStaked")
        .withArgs(addr1, 0, stakeAmount);

      // Validate user stake data
      const userStake = await contract.userStakes(0, addr1);
      expect(userStake.stakeAmount).to.equal(stakeAmount);
    });

    it("should revert if stake amount is zero", async function () {
      const {contract, usdt, addr1} = await loadFixture(deployDexFixture);
      await contract.setStakes(0, usdt.target); // Period.Days_7 = 0

      await expect(contract.connect(addr1).newStake(0, 0)).to.be.revertedWith(
        "stake amount must be > 0"
      );
    });

    it("should transfer tokens from the user to the contract", async function () {
      const {contract, usdt, addr1} = await loadFixture(deployDexFixture);
      await contract.setStakes(0, usdt.target); // Period.Days_7 = 0

      const stakeAmount = ethers.parseEther("100");
      await usdt.mint(addr1.address, stakeAmount);
      await usdt.connect(addr1).approve(contract, stakeAmount);

      const initialBalance = await usdt.balanceOf(addr1.address);

      await contract.connect(addr1).newStake(0, stakeAmount);

      const finalBalance = await usdt.balanceOf(addr1.address);
      const contractBalance = await usdt.balanceOf(contract);

      expect(finalBalance).to.equal(initialBalance - stakeAmount);
      expect(contractBalance).to.equal(stakeAmount);
    });

    it.only("should accumulate rewards correctly after multiple stakes", async function () {
      const {contract, usdt, oah, addr1} = await loadFixture(deployDexFixture);
      const APR = 10; // 10% APR
      const STAKE_PERIOD = 7 * 24 * 60 * 60; // 7 days
      const STAKE_AMOUNT = ethers.parseEther("10"); // 100 tokens
      const STAKE_AMOUNT_1 = ethers.parseEther("20"); // 100 tokens

      // Add a staking pool
      await contract.setStakes(0, usdt); // Period 0 = 7 days by default

      // Transfer tokens to addr1 and approve staking
      await usdt.mint(addr1, STAKE_AMOUNT + STAKE_AMOUNT_1);
      await usdt
        .connect(addr1)
        .approve(contract, STAKE_AMOUNT + STAKE_AMOUNT_1);

      // Stake tokens
      await contract.connect(addr1).newStake(0, STAKE_AMOUNT);

      // Fast forward time by 2 days
      await ethers.provider.send("evm_increaseTime", [2 * 24 * 60 * 60]);
      await ethers.provider.send("evm_mine");

      // Stake tokens
      await contract.connect(addr1).newStake(0, STAKE_AMOUNT_1);

      // Fast forward time by 7 days
      await ethers.provider.send("evm_increaseTime", [STAKE_PERIOD]);
      await ethers.provider.send("evm_mine");

      // Calculate expected rewards
      // const expectedRewards =
      //   ((STAKE_AMOUNT + STAKE_AMOUNT_1) * BigInt(STAKE_PERIOD * APR)) /
      //   (BigInt(3 * 100) * BigInt(365 * 24 * 60 * 60));
      const expectedRewards =
        (STAKE_AMOUNT_1 * BigInt(STAKE_PERIOD * APR)) /
          (BigInt(3 * 100) * BigInt(365 * 24 * 60 * 60)) +
        (STAKE_AMOUNT * BigInt(9 * 24 * 60 * 60 * APR)) /
          (BigInt(3 * 100) * BigInt(365 * 24 * 60 * 60));
      // console.log("expectedRewards", expectedRewards);
      // Claim rewards
      await expect(contract.connect(addr1).claim(0))
        .to.emit(contract, "UserClaimed")
        .withArgs(0, addr1, oah, expectedRewards);

      // // Check final reward token balance of addr1
      const finalBalance = await oah.balanceOf(addr1.address);
      expect(finalBalance).to.equal(expectedRewards);
    });
  });

  describe("withdraw", function () {
    it("should allow a user to withdraw their staked tokens after the lock period", async function () {
      const {contract, usdt, addr1} = await loadFixture(deployDexFixture);
      await contract.setStakes(0, usdt.target); // Period.Days_7 = 0
      const stakeAmount = ethers.parseEther("10");

      // Approve and stake tokens
      await usdt.mint(addr1, stakeAmount);
      await usdt.connect(addr1).approve(contract, stakeAmount);
      await contract.connect(addr1).newStake(0, stakeAmount);

      // Fast-forward time beyond the lock period (7 days)
      await ethers.provider.send("evm_increaseTime", [7 * 24 * 60 * 60]);
      await ethers.provider.send("evm_mine", []);

      // Withdraw staked tokens
      await expect(contract.connect(addr1).withdraw(0, stakeAmount))
        .to.emit(contract, "UserWithdrew")
        .withArgs(addr1.address, 0, stakeAmount);

      // Check user's balance after withdrawal
      const userBalance = await usdt.balanceOf(addr1);
      expect(userBalance).to.equal(stakeAmount);

      // Check contract's balance
      const contractBalance = await usdt.balanceOf(contract);
      expect(contractBalance).to.equal(0);
    });

    it("should allow user to withdraw native coin", async function () {
      const {contract, usdt, addr1} = await loadFixture(deployDexFixture);
      await contract.setStakes(0, ethers.ZeroAddress); // Period.Days_7 = 0
      const stakeAmount = ethers.parseEther("1");

      // User stakes 1 ETH
      await contract
        .connect(addr1)
        .newStake(0, stakeAmount, {value: stakeAmount});

      // Fast forward time to after lock period (7 days)
      await ethers.provider.send("evm_increaseTime", [7 * 24 * 60 * 60]); // 7 days in seconds
      await ethers.provider.send("evm_mine");

      // User withdraws staked ETH
      await expect(contract.connect(addr1).withdraw(0, stakeAmount))
        .to.emit(contract, "UserWithdrew")
        .withArgs(addr1.address, 0, stakeAmount);

      // Validate user stake data is updated
      const userStake = await contract.userStakes(0, addr1);
      expect(userStake.stakeAmount).to.equal(0);
    });

    it("should revert if the user tries to withdraw before the lock period", async function () {
      const {contract, usdt, addr1} = await loadFixture(deployDexFixture);
      const stakeAmount = ethers.parseEther("10");
      await contract.setStakes(0, usdt.target); // Period.Days_7 = 0
      await usdt.mint(addr1, stakeAmount);

      // Approve and stake tokens
      await usdt.connect(addr1).approve(contract, stakeAmount);
      await contract.connect(addr1).newStake(0, stakeAmount);

      // Attempt to withdraw before the lock period ends
      await expect(
        contract.connect(addr1).withdraw(0, stakeAmount)
      ).to.be.revertedWith("staked tokens are still locked");
    });

    it("should revert if the user tries to withdraw more than their staked amount", async function () {
      const {contract, usdt, addr1} = await loadFixture(deployDexFixture);
      const stakeAmount = ethers.parseEther("10");
      await contract.setStakes(0, usdt.target); // Period.Days_7 = 0
      await usdt.mint(addr1, stakeAmount);

      // Approve and stake tokens
      await usdt.connect(addr1).approve(contract, stakeAmount);
      await contract.connect(addr1).newStake(0, stakeAmount);

      // Fast-forward time beyond the lock period (7 days)
      await ethers.provider.send("evm_increaseTime", [7 * 24 * 60 * 60]);
      await ethers.provider.send("evm_mine", []);

      // Attempt to withdraw more than staked amount
      const excessAmount = ethers.parseEther("15");
      await expect(
        contract.connect(addr1).withdraw(0, excessAmount)
      ).to.be.revertedWith("withdraw amount > staked amount");
    });
  });

  describe("claim", function () {
    it("should allow a user to claim their earned rewards", async function () {
      const {contract, usdt, oah, addr1} = await loadFixture(deployDexFixture);
      await contract.setStakes(0, usdt.target); // Period.Days_7 = 0
      const stakeAmount = ethers.parseEther("10");

      // Approve and stake tokens
      await usdt.mint(addr1, stakeAmount);
      await usdt.connect(addr1).approve(contract, stakeAmount);
      await contract.connect(addr1).newStake(0, stakeAmount);

      // Fast-forward time to accumulate rewards (e.g., 10 days)
      await ethers.provider.send("evm_increaseTime", [7 * 24 * 60 * 60]);
      await ethers.provider.send("evm_mine", []);

      // Claim rewards
      await expect(contract.connect(addr1).claim(0))
        .to.emit(contract, "UserClaimed")
        .withArgs(
          0,
          addr1,
          oah,
          await contract.getEarnedRewardTokens(0, addr1.address)
        );

      // Check user's reward token balance
      const userRewardBalance = await oah.balanceOf(addr1.address);
      expect(userRewardBalance).to.be.gt(0);
    });

    it("should allow a user to claim multiple times", async function () {
      const {contract, usdt, oah, addr1} = await loadFixture(deployDexFixture);
      await contract.setStakes(0, usdt.target); // Period.Days_7 = 0
      const stakeAmount = ethers.parseEther("10");

      // Approve and stake tokens
      await usdt.mint(addr1, stakeAmount);
      await usdt.connect(addr1).approve(contract, stakeAmount);
      await contract.connect(addr1).newStake(0, stakeAmount);

      // Fast-forward time to accumulate rewards (e.g., 10 days)
      await ethers.provider.send("evm_increaseTime", [2 * 24 * 60 * 60]);
      await ethers.provider.send("evm_mine", []);

      // Claim rewards
      await expect(contract.connect(addr1).claim(0)).to.emit(
        contract,
        "UserClaimed"
      );
      // Check user's reward token balance
      const userRewardBalance = await oah.balanceOf(addr1.address);
      expect(userRewardBalance).to.be.gt(0);

      // Fast-forward time to accumulate rewards (e.g., 10 days)
      await ethers.provider.send("evm_increaseTime", [2 * 24 * 60 * 60]);
      await ethers.provider.send("evm_mine", []);

      // Claim rewards
      await expect(contract.connect(addr1).claim(0)).to.emit(
        contract,
        "UserClaimed"
      );
      // Check user's reward token balance
      const userRewardBalance1 = await oah.balanceOf(addr1.address);
      expect(userRewardBalance1).to.be.gt(0);
    });

    it("Should correctly calculate accumulated rewards for a user", async function () {
      const {contract, usdt, oah, addr1} = await loadFixture(deployDexFixture);
      await contract.setStakes(0, usdt.target); // Period.Days_7 = 0
      const stakeAmount = ethers.parseEther("1");

      await usdt.mint(addr1, stakeAmount);
      await usdt.connect(addr1).approve(contract, stakeAmount);
      await contract
        .connect(addr1)
        .newStake(0, stakeAmount, {value: stakeAmount});

      // Get accumulated rewards
      const rewards = await contract.userAccumulatedRewards(0, addr1);

      expect(rewards).to.equal(0);
    });

    it("should return 0 when convertRate equal 0", async function () {
      const {contract, usdt, addr1} = await loadFixture(deployDexFixture);
      await contract.setStakes(0, usdt.target);
      const stakeAmount = ethers.parseEther("1");

      await usdt.mint(addr1, stakeAmount);
      await usdt.connect(addr1).approve(contract, stakeAmount);
      await contract.connect(addr1).newStake(0, stakeAmount);

      await contract.set(0, 0);

      const updatedstakes = await contract.stakes(0);
      expect(await contract.getEarnedRewardTokens(0, addr1)).to.equal(0);
    });

    it("should correctly calculate rewards after the staking period ends", async function () {
      const {contract, usdt, oah, addr1} = await loadFixture(deployDexFixture);
      const APR = 10; // 10% APR
      const STAKE_PERIOD = 7 * 24 * 60 * 60; // 7 days
      const STAKE_AMOUNT = ethers.parseEther("120"); // 100 tokens

      // Add a staking pool
      await contract.setStakes(0, usdt); // Period 0 = 7 days by default

      // Transfer tokens to addr1 and approve staking
      await usdt.mint(addr1, STAKE_AMOUNT);
      await usdt.connect(addr1).approve(contract, STAKE_AMOUNT);

      // Stake tokens
      await contract.connect(addr1).newStake(0, STAKE_AMOUNT);

      // Fast forward time by 7 days
      await ethers.provider.send("evm_increaseTime", [STAKE_PERIOD]);
      await ethers.provider.send("evm_mine");

      // Calculate expected rewards
      const expectedRewards =
        (STAKE_AMOUNT * BigInt(STAKE_PERIOD * APR)) /
        (BigInt(3 * 100) * BigInt(365 * 24 * 60 * 60));

      // Claim rewards
      await expect(contract.connect(addr1).claim(0))
        .to.emit(contract, "UserClaimed")
        .withArgs(0, addr1, oah, expectedRewards);

      // // Check final reward token balance of addr1
      const finalBalance = await oah.balanceOf(addr1.address);
      expect(finalBalance).to.equal(expectedRewards);
    });
  });
});
