import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import {anyValue} from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import {expect} from "chai";
import {ethers, upgrades} from "hardhat";

describe("Staking", function () {
  async function deployDexFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const USDT = await ethers.getContractFactory("MockERC20");
    const usdt = await USDT.deploy("USDTToken", "USDT");

    const OAH = await ethers.getContractFactory("MockERC20");
    const oah = await OAH.deploy("OAH Reward Token", "OAH");
    const oahAddr = await oah.getAddress();
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
    usdt.mint(owner, 1000n ** 18n);

    return {contract, owner, otherAccount, usdt};
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const {contract, owner} = await loadFixture(deployDexFixture);

      expect(await contract.owner()).to.equal(owner.address);
    });
  });

  // describe("SetSupportedTokens", function () {
  //   it("The function should succeed", async function () {
  //     const {contract, owner} = await loadFixture(deployDexFixture);

  //     await expect(contract.setSupportedTokens([WETH9, DAI], [true, false]))
  //       .to.emit(contract, "SupportedTokenUpdated")
  //       .withArgs([WETH9, DAI], [true, false]); // We accept any value as `when` arg
  //   });

  //   it("The function should fail: wrong owner", async function () {
  //     const {contract, otherAccount} = await loadFixture(deployDexFixture);

  //     await expect(
  //       contract
  //         .connect(otherAccount)
  //         .setSupportedTokens([WETH9, USDC], [true, false])
  //     ).to.be.revertedWith("Ownable: caller is not the owner");
  //   });
  // });

  // describe.only("Deposit", function () {
  //   it("The function should succeed", async function () {
  //     const amountIn = 10n ** 18n;
  //     const {contract, usdc, owner} = await loadFixture(deployDexFixture);
  //     contract.setSupportedTokens([usdc], [true]);
  //     await usdc.approve(contract, amountIn);
  //     const tx = await contract.deposit(usdc, amountIn);
  //     await expect(tx)
  //       .to.emit(contract, "Deposited")
  //       .withArgs(owner, usdc, amountIn);
  //   });
  // });
  describe("test stake & withdraw, time lock and rewards", function () {

  });
});
