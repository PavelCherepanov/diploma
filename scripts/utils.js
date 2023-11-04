import { ethers } from "ethers";
import React from 'react';
import { useState } from 'react';

const hre = require("hardhat");
const CharityArtifact = require('../artifacts/contracts/Charity.sol/Charity.json')
const { ethers } = require("ethers");

async function savePrayer2(){
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const constractAddress = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9'
    const signer = provider.getSigner()

  
    let address = await signer.getAddress()

    
    const contract = new hre.ethers.Contract(constractAddress,CharityArtifact.abi,address) 
    const charity = await contract.generateCampaignId()
    console.log(charity.toString())

}