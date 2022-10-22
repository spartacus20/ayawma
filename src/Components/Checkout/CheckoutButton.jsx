import React from 'react'
import axios from '../../Services/axios';
import Password from "../../Assets/Password";

import { useStateValue } from '../../StateProvider'

function CheckoutButton() {

  const [{ basket }, dispatch] = useStateValue();
  const handleCheckout = () => {

    if(basket.length > 0){ 
      axios.post("/create-checkout-session", {
        basket
      }).then(res => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      }).catch(err => {
        console.log(err.message)
      });
    }

  }


  return (

    <>
      <button onClick={() => handleCheckout()} className="bg-black text-white  w-[200px] h-[50px] flex items-center mx-auto justify-center hover:bg-yellow-500"><Password /><span className="pl-2">Checkout</span></button>

    </>
  )
}

export default CheckoutButton