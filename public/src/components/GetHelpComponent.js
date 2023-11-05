import React from 'react';
import { useState } from 'react';
import notificationLogo from '../assets/check-circle.svg';
import styles from "../App.css";
import axios from 'axios';
import { startCampaign } from '../Func';

const GetHelp = () => {
    const { ethers } = require("ethers");
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [fileImg, setFileImg] = useState(null);
    const [deadline, setDeadline] = useState('')
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    })

    const [notificationSuccess, setNotificationSuccess] = React.useState('');

    async function sendFileToIPFS() {
        if (fileImg) {
            try {
                const formData = new FormData();
                formData.append("file", fileImg);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
                        'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
                        "Content-Type": "multipart/form-data"
                    },
                });
                const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
                return "https://ipfs.io/ipfs/" + resFile.data.IpfsHash

            } catch (error) {
                console.log("Error sending File to IPFS: " + error)
            }
        }
    }

    async function savePrayer(e) {
        e.preventDefault();        
        const imgIPFSUrl = sendFileToIPFS()
        await startCampaign(title, description, imgIPFSUrl, deadline)
    }

    function showNotisfactionSuccess() {
        let element = document.getElementsByClassName('notisfaction');
        element.className = styles.container;
        document.body.appendChild(element);
    }


    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Создание благотворительного фонда</h2>
                    <div className='card-body'>
                        <form >
                            <div className='form-group mb-2'>
                                <label className='form-label'>Название:</label>
                                <input
                                    type='text'
                                    placeholder='Введите краткий заголовок'
                                    name='title'
                                    value={title}

                                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                    onChange={(e) => setTitle(e.target.value)}
                                >
                                </input>
                                {errors.title && <div className='invalid-feedback'> {errors.title} </div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Описание:</label>
                                <textarea
                                    type='text'
                                    placeholder='Описание'
                                    name='description'
                                    value={description}
                                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                    onChange={(e) => setDescription(e.target.value)}
                                >
                                </textarea>
                                {errors.description && <div className='invalid-feedback'> {errors.description} </div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Картинка:</label>
                                <input

                                    type='file'
                                    placeholder=''
                                    name='imgUrl'
                                    // value={imgUrl}
                                    className={`form-control ${errors.imgUrl ? 'is-invalid' : ''}`}
                                    onChange={(e) => setFileImg(e.target.files[0])}
                                >
                                </input>
                                {errors.imgUrl && <div className='invalid-feedback'> {errors.imgUrl} </div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Крайний срок:</label>
                                <input
                                    type='text'
                                    placeholder='Крайний срок'
                                    name='email'
                                    value={deadline}
                                    className={`form-control ${errors.deadline ? 'is-invalid' : ''}`}
                                    onChange={(e) => setDeadline(e.target.value)}
                                >
                                </input>
                                {errors.deadline && <div className='invalid-feedback'> {errors.deadline} </div>}
                            </div>


                            <button className='btn btn-success' onClick={savePrayer}>Создать</button>
                        </form>

                    </div>
                </div>
                <div class="notification">
                    <div class="notification__body">
                        <img
                            src={notificationLogo}
                            alt="Success"
                            class="notification__icon"
                        />
                        Благотворительный фонд создается &#128640;
                    </div>
                    <div class="notification__progress"></div>
                </div>
            </div>
        </div>
    );
}

export default GetHelp;
