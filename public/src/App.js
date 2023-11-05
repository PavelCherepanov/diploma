import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import GetHelpComponent from './components/GetHelpComponent';
import HelpComponent from './components/HelpComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CampaignComponent from './components/CampaignComponent';
import NotFoundComponent from './components/NotFoundComponent';
import CampaignNotFoundComponent from './components/CampaignNotFoundComponent';

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
          <Route path='*' element={<NotFoundComponent/>}></Route>
          <Route path='/' element={<HelpComponent/>}></Route>
          <Route path='/get-help' element={<GetHelpComponent/>}></Route>
          <Route path='/help' element={<HelpComponent/>}></Route>
          <Route path='/help/:id' element={<CampaignComponent/>}></Route> 
          <Route path='/campaign-not-found' element={<CampaignNotFoundComponent/>}></Route>
        </Routes>



        <FooterComponent />
      </BrowserRouter>


    </div>
  );
}

export default App;
