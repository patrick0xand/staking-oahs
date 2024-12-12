import {ethers, upgrades, run} from "hardhat";

async function main() {
  const Staking = await ethers.getContractFactory("Staking");
  const contract = await upgrades.deployProxy(Staking, [
    "0xE897F7A6AC22a86399C3D0d31886Ae5d073da374", // owner
    "0xC485491BbeAAf7BCD5F1A31D8602DC7927Fd58aF", // oah
  ]);
  await contract.waitForDeployment();
  console.log("contract deployed to:", await contract.target);
  const impl = await upgrades.erc1967.getImplementationAddress(
    contract.target.toString()
  );
  console.log("implAddress deployed to:", impl);

  const verifyResult = await run("verify:verify", {
    address: contract.target,
    constructorArguments: [],
  });
  console.log("verifyResult:", verifyResult);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
