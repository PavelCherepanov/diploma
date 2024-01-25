import logo from './logo.svg';
import './App.css';
import './output.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UploadFileComponent from './components/UploadFileComponent';
import VerifyFileComponent from './components/VerifyFileComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import NotFoundComponent from './components/NotFoundComponent';
import AboutComponent from './components/AboutComponent';
import { getCount } from './Functions/SmartContractFunctions';
import { useEffect, useState } from "react";
import {errorNoMetamaskNotify} from "./Functions/NotificationsFunctions";


function App() {
  <noscript><p>Ваш браузер не поддерживает Java Script!</p></noscript>
  const ethers = require("ethers")
  const [wallet, setWallet] = useState('')
  const [address, setAddress] = useState('')
  const [count, setCount] = useState()

  let signer = null;
  let provider;
  if (window.ethereum == null) {
    console.log("MetaMask not installed; using read-only defaults")
    errorNoMetamaskNotify()
    provider = ethers.getDefaultProvider()
  } else {
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = provider.getSigner()
    console.log("MetaMask installed")
  }



  useEffect(() => {
    const connectWallet = async () => {
      await provider.send("eth_requestAccounts", []);
    }
    connectWallet().catch(console.error);
    const getData = async () => {
      let address = "ssss"//await signer.getAddress()
      let balance = await provider.getBalance(address)
      const res = ethers.utils.formatEther(balance)
      setWallet(res)
      setAddress("addresssssssssssssssssssssssss")

    }
    getData().catch(console.error)
    // setCount(getCount().catch(()=>console.log("JS залупа")))
    getCount().then((count) => setCount(count))
  })

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent address={address} count={count} />
        <Routes>
          <Route path='*' element={<NotFoundComponent />}></Route>
          <Route path='/' element={<VerifyFileComponent />}></Route>
          <Route path='/upload-file' element={<UploadFileComponent />}></Route>
          <Route path='/verify-file' element={<VerifyFileComponent />}></Route>
          <Route path='/about' element={<AboutComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;