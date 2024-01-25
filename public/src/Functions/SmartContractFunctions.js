import { ethers } from "ethers";

const VerificationArtifact = require('../Verification.json')
// const provider = new ethers.BrowserProvider(window.ethereum)
const provider = new ethers.JsonRpcProvider('http://localhost:8545')
const contractAddress = '0xCD8a1C3ba11CF5ECfa6267617243239504a98d90'
const signer = await provider.getSigner()
const verificationContract = new ethers.Contract(contractAddress, VerificationArtifact.abi, signer)


export const getFileById = async (id) => {
    return await verificationContract.getFileById(id);
};

export const uploadFile = async (ipfsHash) => {
    return await verificationContract.uploadFile(ipfsHash);
};

export const verifyFile = async (ipfsHash) => {
    return await verificationContract.verifyFile(ipfsHash);
};

export const getCount = async () => {
    return await verificationContract.getFilesCount();
};

export const sum = async (a, b) => {
    return await verificationContract.sum(a, b);
};
