import React from 'react';
import { ethers } from "ethers";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getContract } from '../CharityContract';

async function getCampaignById(id) {
    // const contract = await getContract()
    const CharityArtifact = require('../Charity.json')
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const constractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
    const signer = provider.getSigner()

    const contract = new ethers.Contract(constractAddress, CharityArtifact.abi, signer)

    const campaign = await contract.getCampaign(id);
    console.log(campaign);
    return campaign

    // const jsonCampaign = JSON.parse(JSON.stringify(campaign))
    // return JSON.stringify(jsonCampaign.)

}

const CampagnComponent = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [time, setTime] = useState('');
    function setAllResults(result) {
        setTitle(result[1])
        setImgUrl(result[2])
        setDescription(result[3])
        console.log(parseInt(result['deadline']['_hex']))
        setTime(parseInt(result['deadline']['_hex']))
    }

    function unixTimestampConvertToTimeDate(unixTimestamp) {
        var a = new Date(unixTimestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }

    if (id) {
        // const campaign = getCampaignById(0);
        getCampaignById(id).then(res => (setAllResults(res)))
        // console.log(campaign)
    }

    // useEffect( () => {
    //     if(id){
    //         const campaign = getCampaignById(0);
    //         console.log(campaign)
    //     }

    // }, [id])





    return (
        <div>
            <div className='container'>
                <h2 className='text-center'>Благотворительный фонд</h2>
                <p>Заголовок: {title}</p>
                <p>Описание: {description}</p>
                <p>Картинка: {imgUrl}</p>
                <p>Время: {unixTimestampConvertToTimeDate(time)}</p>
                <button>Пожертвовать</button>
            </div>
        </div>
    );
}

export default CampagnComponent;
