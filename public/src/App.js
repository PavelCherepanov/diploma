import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import GetHelpComponent from './components/GetHelpComponent';
import HelpComponent from './components/HelpComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CampagnComponent from './components/CampagnComponent';
// const hre = require("hardhat");
// const CharityArtifact = require('../artifacts/contracts/Charity.sol/Charity.json')

function App() {
  const { ethers } = require("ethers");
  const [wallet, setWallet] = useState('')
  const [address, setAddress] = useState('')
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()


  useEffect(() => {
    const connectWallet = async () => {
      await provider.send("eth_requestAccounts", []);
    }
    connectWallet().catch(console.error);
    const getData = async () => {
      let address = await signer.getAddress()
      let balance = await provider.getBalance(address)
      const res = ethers.utils.formatEther(balance)
      setWallet(res)
      setAddress(address)
    }
    getData().catch(console.error)

  })



  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent balance={wallet} address={address} />
        <Routes>
          <Route path='/' element={<GetHelpComponent />}></Route>
          <Route path='/get-help' element={<GetHelpComponent />}></Route>
          <Route path='/help' element={<HelpComponent />}></Route>
          <Route path='/help/:id' element={<CampagnComponent />}></Route>
        </Routes>



        <FooterComponent />
      </BrowserRouter>


    </div>
  );
}

export default App;
