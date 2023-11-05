import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getAllCompaigns, getCampaignCount } from '../Func';

const Help = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [time, setTime] = useState('');
    const [count, setCount] = useState('');
    const [listCampaigns, setListCampaigns] = useState([]);


    function setAllResults(result) {
        setTitle(result[1])
        setImgUrl(result[2])
        setDescription(result[3])
        console.log(parseInt(result['deadline']['_hex']))
        setTime(parseInt(result['deadline']['_hex']))
    }
    

    getCampaignCount().then(res => setCount(res))

    getAllCompaigns().then(res => setListCampaigns(res))

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='text-center'>Благотворительные фонды</h2>
                <p className='text-center'>Количество фондов: {count}</p>
                {

                    listCampaigns.map((campaign, index) => {
                        return (
                            <div className='col-4'>
                                <div key={index} className="card">
                                    <img className="card-img-top" src={campaign.imgUrl} alt={campaign.imgUrl} width="20%" />
                                    <div className="card-body">
                                        <h5 className="card-title">{campaign.title}</h5>
                                        <p className="card-text">{campaign.description}</p>
                                        <a href={"/help/" + index} className="btn btn-primary">Подробнее</a>
                                    </div>
                                </div>
                            </div>

                        );
                    })}
            </div>
        </div>
    );
}

export default Help;
