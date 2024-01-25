import React, { useState } from 'react';
import { uploadFile } from '../Functions/SmartContractFunctions';
import { sendFileToIPFS } from '../Functions/IPFSFunctions';
import { errorFileAlreadyExistsNotify, errorNoFileNotify, successUploadFileNotify } from '../Functions/NotificationsFunctions';
import { ToastContainer } from "react-toastify";


const UploadFileComponent = () => {
  const [preview, setPreview] = useState(null);
  const [file, setFileImg] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPreview(URL.createObjectURL(file));
    setFileImg(event.target.files[0])
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Upload")
    sendFileToIPFS(file)
      .then((ipfsHash) => uploadFile(ipfsHash))
      .then(() => successUploadFileNotify())
      .catch(error => {
        if (error.name == "TypeError") {
          errorNoFileNotify()
        } else if (error.name == "Error") {
          errorFileAlreadyExistsNotify()
        }
      })
      
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md mx-auto p-6 bg-gray-200 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Загрузить файл</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="file" className="block text-gray-800 font-bold mb-2">
              Файл
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="w-full border border-gray-300 p-2 rounded-lg"
              onChange={handleFileChange}
              accept=".jpg, .jpeg, .png, .pdf"
            />
          </div>
          {preview && (
            <div>
              <img src={preview} alt="Preview" className="w-full h-auto rounded-lg" />
            </div>
          )}
          <div>
            <button
              type="submit"
              className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
            >
              Загрузить
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UploadFileComponent;