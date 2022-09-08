import './App.css';

import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { gapi } from "gapi-script";
import { useEffect } from 'react';

import Home from "./Pages/Home/Home"
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ProductResult from './Pages/SerachResullt/ProductResult';
import RecorveryPassword from './Pages/RecoveryPassword/RecorveryPassword';
import EmailSent from './Pages/RecoveryPassword/EmailSent';
import NewPassword from './Pages/RecoveryPassword/NewPassword';


function App() {
  
  const clientId =
    "235810836453-l5j7h9ithmbsf1is1bsld3o7aao9rmiv.apps.googleusercontent.com";
  
    useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signin" element={<Register />}/>
        <Route path="/products" element={<ProductResult />}/>
        <Route path="/recovery-password" element={<RecorveryPassword />}/>
        <Route path="/password-sent" element={<EmailSent />}/>
        <Route path="/new-password" element={<NewPassword />}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer />




    </div>
  );
}

export default App;
