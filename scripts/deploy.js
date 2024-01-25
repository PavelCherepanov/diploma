const hre = require("hardhat");
async function main() {
  const Contract = await hre.ethers.deployContract("Verification");
  const contractAddr = await Contract.getAddress()
  console.log("--------------------------")
  console.log("Verification deployed to:", contractAddr);
  console.log("--------------------------")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});