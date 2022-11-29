import "./App.css";

import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ProductResult from "./Pages/SerachResullt/ProductResult";
import RecorveryPassword from "./Pages/RecoveryPassword/RecorveryPassword";
import EmailSent from "./Pages/RecoveryPassword/EmailSent";
import NewPassword from "./Pages/RecoveryPassword/NewPassword";
import ProducPage from "./Pages/ProductPage/ProductPage";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Checkout from "./Pages/Checkout/Checkout";
import Success from "./Pages/Checkout/Success";
import Navbar from "./Components/Navbar/Navbar";
import Settings from "./Pages/Settings/Settings";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import PageHandler from "./Pages/PageNotFound/PageHandler";


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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/s/:product" element={<ProductResult />} />
          <Route path="/recovery-password" element={<RecorveryPassword />} />
          <Route path="/password-sent" element={<EmailSent />} />
          <Route path="/reset-password/:id/:token" element={<NewPassword />} />
          <Route path="/:product" element={<PageHandler />} />
          <Route path="/shopcart" element={<ShoppingCart />} />
          <Route path="/checkout/:clientSecret/:id" element={<Checkout />} />
          <Route path="/checkout/:clientSecret/:id/success" element={<Success />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
