import React, { useState } from 'react';
import { verifyFile } from '../Functions/SmartContractFunctions';
import { errorNoFileNotify, successVerifyFileNotify, errorNotVerifyNotify } from '../Functions/NotificationsFunctions';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyFileComponent = () => {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPreview(URL.createObjectURL(file));
    setFile(file)
  };

  // async function getIpfsHash(hashingFile) {
  //   const ipfsHash = require('ipfs-only-hash')
  //   const fileReader = new FileReader()
  //   try {
  //     fileReader.readAsArrayBuffer(hashingFile)
  //     fileReader.onloadend = function () {
  //       let arrayBuffer = fileReader.result
  //       let uint8Array = new Uint8Array(arrayBuffer)
  //       let hash = ipfsHash.of(uint8Array)
  //       console.log(hash)
  //       return hash
  //     };
  //   } catch {
  //     console.log("Error")
  //   }
  // }

  // async function verify(verifyingFile) {
  //   const hash = await getIpfsHash(verifyingFile)
  //   verifyFile(hash)
  //   console.log(hash)
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Verify")

    const ipfsHash = require('ipfs-only-hash')
    const fileReader = new FileReader()
    try {
      fileReader.readAsArrayBuffer(file)
      fileReader.onloadend = function () {
        let arrayBuffer = fileReader.result
        let uint8Array = new Uint8Array(arrayBuffer)
        let hash = ipfsHash.of(uint8Array)
        verifyFile(hash)
          .then(() => successVerifyFileNotify())
          .catch(() => errorNotVerifyNotify())
      }
    } catch {
      errorNoFileNotify()
    }

  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div id='errorNotification'></div>
      <div className="max-w-md mx-auto p-6 bg-gray-200 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Верифицировать файл</h1>
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
              Верифицировать
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>

  );
};

export default VerifyFileComponent;