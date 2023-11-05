import { ethers } from "ethers";

const CharityArtifact = require('./Charity.json')
const provider = new ethers.providers.Web3Provider(window.ethereum)
const constractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
const signer = provider.getSigner()
const charityContract =  new ethers.Contract(constractAddress, CharityArtifact.abi, signer)

export const getAllCompaigns = async () => {
    const campaignCount = await charityContract.getCampaignCount();
    const campaigns = [];
    for (var i = 0; i < campaignCount; i++) {
        const campaign = await charityContract.campaigns(i);
        campaigns.push(campaign);
    }
    return campaigns
};

export const getCampaignCount = async () => {
    const campaignCount = await charityContract.getCampaignCount();
    return parseInt(campaignCount);
};

export const getCampaignById = async (id) => {
    const campaign = await charityContract.getCampaign(id);
    return campaign
};

export const startCampaign = async (title, description, imgIPFSUrl, deadline) => {
    const campaign = await charityContract.startCampaign(title, description, imgIPFSUrl, deadline);
    return campaign
};


export const donateToCampaign = async (id) => {
    const danate = await charityContract.donateToCampaign(id);
    return danate
};