import React from 'react';
import { useState } from 'react';

import axios from 'axios';

const GetHelp = () => {
    const CharityArtifact = require('../Charity.json')
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


    // async function sendFileToIPFS(e) {

    //     if (fileImg) {
    //         try {
    
    //             const formData = new FormData();
    //             formData.append("file", fileImg);
    
    //             const resFile = await axios({
    //                 method: "post",
    //                 url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
    //                 data: formData,
    //                 headers: {
    //                     'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
    //                     'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
    //                     "Content-Type": "multipart/form-data"
    //                 },
    //             });
    
    //             const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
    //          console.log(ImgHash); 
    // //Take a look at your Pinata Pinned section, you will see a new file added to you list.   
    
    
    
    //         } catch (error) {
    //             console.log("Error sending File to IPFS: ")
    //             console.log(error)
    //         }
    //     }
    // }

    async function savePrayer(e) {
        e.preventDefault();
        const prayer = { title, description, imgUrl, deadline };
        console.log(prayer);
        console.log("xsxsaxsaxsa-------------------------------")
        console.log(process.env.REACT_APP_PINATA_API_KEY)
        console.log(process.env.REACT_APP_PINATA_API_SECRET)
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const constractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
        const signer = provider.getSigner()
        // sendFileToIPFS()

        let address = await signer.getAddress()
        const contract = new ethers.Contract(constractAddress, CharityArtifact.abi, signer)
        
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
               
                console.log()
    
                const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
                setImgUrl(ImgHash)
             console.log(ImgHash); 
    //Take a look at your Pinata Pinned section, you will see a new file added to you list.   
    
    
    
            } catch (error) {
                console.log("Error sending File to IPFS: ")
                console.log(error)
            }
        }

        const charity = await contract.startCampaign(title, description, imgUrl, deadline)

        





    }
    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Название формы</h2>
                    <div className='card-body'>
                        <form >
                            <div className='form-group mb-2'>
                                <label className='form-label'>Заголовок:</label>
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
                                <label className='form-label'>Ссылка на картинку:</label>
                                <input
                                
                                    type='file'
                                    placeholder=''
                                    name='imgUrl'
                                    value={imgUrl}
                                    className={`form-control ${errors.imgUrl ? 'is-invalid' : ''}`}
                                    onChange={(e) =>setFileImg(e.target.files[0]) }
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


                            <button className='btn btn-success' onClick={savePrayer} >Отправить</button>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default GetHelp;
