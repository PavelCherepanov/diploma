const hre = require("hardhat");
const CharityArtifact = require('../artifacts/contracts/Charity.sol/Charity.json')
async function main() {

  const [acc1, acc2] = await hre.ethers.getSigners()
  const Charity = await hre.ethers.deployContract("Charity");
  const contractAddr = await Charity.getAddress()
  console.log("--------------------------")
  console.log("Charity deployed to:", contractAddr);
  console.log("--------------------------")

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
