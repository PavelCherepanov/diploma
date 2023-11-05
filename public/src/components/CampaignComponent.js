import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getCampaignById, donateToCampaign } from '../Func';
import { useNavigate } from 'react-router-dom';


const CampaignComponent = () => {
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
       // var months = {'Jan':'01', 'Feb':'02', 'Mar':'03', 'Apr':'04', 'May':'05', 'Jun':'06', 'Jul':'07', 'Aug':'08', 'Sep':'09', 'Oct':'10', 'Nov':'11', 'Dec':'12'}
        var year = a.getFullYear();
        if (a.getMonth() < 10) {
            var month = '0' + a.getMonth();
        } else {
            var month = months[a.getMonth()];
        }
        var date = a.getDate();
        var time = date + '.' + month + '.' + year 
        return time;
    }
    const navigator = useNavigate();
    if (id && id < 15) {
        getCampaignById(id).then(res => (setAllResults(res)))
    } else {
        navigator('/campaign-not-found')
    }

    function donate(){
        donateToCampaign(0)
    }

    return (
        <div>
            <div className='container text-center'>
                <h2 className='text-center'>{title}</h2>
                <p ><img src={imgUrl} alt={imgUrl} width="30%"/> </p>
                <p >{description}</p>
                <p>Окончание сбора средств: {unixTimestampConvertToTimeDate(time)}</p>
                <p><input type='number' /></p>
                <button onClick={() => donate()} className="btn btn-success">Пожертвовать</button>
            </div>
        </div>
    );
}

export default CampaignComponent;