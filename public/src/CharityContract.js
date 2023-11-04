import { ethers } from "ethers";

async function getContract() {
    const CharityArtifact = require('./Charity.json')
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const constractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
    const signer = provider.getSigner()

    const contract = new ethers.Contract(constractAddress, CharityArtifact.abi, signer)

    return contract
}