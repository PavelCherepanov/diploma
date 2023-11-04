import React from 'react';
import { ethers } from "ethers";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getContract } from '../CharityContract';
import { concat } from 'ethers/lib/utils';
import { getAllCompaigns, getCampaignCount } from '../Func';
import axios from 'axios';

async function getCampaignById(id) {

    const CharityArtifact = require('../Charity.json')
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const constractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
    const signer = provider.getSigner()

    const contract = new ethers.Contract(constractAddress, CharityArtifact.abi, signer)

    const campaign = await contract.getCampaign(id);

    return campaign
}

const Help = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [time, setTime] = useState('');
    const [count, setCount] = useState('');
    const [listCampaigns, setListCampaigns] = useState([]);

    const CharityArtifact = require('../Charity.json')
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const constractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
    const signer = provider.getSigner()

    const contract = new ethers.Contract(constractAddress, CharityArtifact.abi, signer)
    // console.log(contract)


    

    // async function getCampaignCount() {
    //     const campaignCount = await contract.getCampaignCount();
    //     return parseInt(campaignCount);
    // }

    function setAllResults(result) {
        setTitle(result[1])
        setImgUrl(result[2])
        setDescription(result[3])
        console.log(parseInt(result['deadline']['_hex']))
        setTime(parseInt(result['deadline']['_hex']))
    }
    // const campaigns = []
    // function getAllCompaigns() {
    //     const campaigns = [
    //         {title:"rerfecc", description:"cscs", imgUrl:"wdwdwdwdw"},
    //         {title:"rerfecc2", description:"cscs2", imgUrl:"wdwdwdwdw2"}
    // ] 
    //     // const campaigns = await contract._campaigns()
    //     for (let i = 0; i < 3; i++) {
    //         getCampaignById(i).then(res => console.log(res))
    //         console.log(campaigns[i])
    //     }
    //     // console.log(campaigns)

    //     return campaigns
        
    // }
    getCampaignCount(contract).then(res => setCount(res))

    // const campaigns  = [{title}]

    // getAllCompaigns(contract).then((e) => {
    //     console.log(JSON.stringify(e))
    //     console.log(e)
    //     // setListCampaigns(e)
    //     // setAddresAccount(e.addressAccount);
    //     // setTasks(e.tasks);
    //     // setContract(e.todoContract);
  
    //     // console.log("Account: ", e.addressAccount);
    //     // console.log("Contract: ", e.todoContract);
    //     // console.log("Tasks: ", e.tasks);
    //   });
    const campaigns = getAllCompaigns(contract).then(res =>setListCampaigns(res))

    return (
        <div>

            <h2 className='text-center'>Благотворительные фонды</h2>
            <p className='text-center'>Количество фондов: {count}</p>
         
            {/* {ca.then(res => (alert(res)))} */}
            {/* {getAllCompaigns().then(res => 
                console.log(res))

            } */}


            {
      
        listCampaigns.map((campaign, index) => {
                return (
            <div key={index} className="card">
                <img className="card-img-top" src="..." alt={campaign.imgUrl} ></img>
                <div className="card-body">
                    <h5 className="card-title">{campaign.title}</h5>
                    <p className="card-text">{campaign.description}</p>
                    <a href={"/help/"+index} className="btn btn-primary">Подробнее</a>
                </div>
            </div>

            );
            })}
        </div>
    );
}

export default Help;
