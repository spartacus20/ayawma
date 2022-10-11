import React from 'react'
import axios from '../../api/axios';
import { useStateValue } from '../../StateProvider'

function CheckoutButton() {
  
  const { basket } = useStateValue(); 
  const handleCheckout = () => {
    axios.post("/create-checkout-session", {
       basket
    }).then(res => {
       if(res.data.url){
        
      }
    })
  }
  
  
  return (
    
    <>
      <button className="bg-black text-white  w-[200px] h-[50px] flex items-center mx-auto justify-center hover:bg-yellow-500"><Password /><span className="pl-2">Checkout</span></button>

    </>
    )
}

export default CheckoutButton