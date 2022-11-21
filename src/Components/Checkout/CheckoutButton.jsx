import React from 'react'
import axios from '../../Services/axios';
import Password from "../../Assets/Password";
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../StateProvider'

function CheckoutButton() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  const handleCheckout = () => {

    if(basket.length > 0){ 
      axios.post("/create-payment-intent", {
        basket
      }).then(res => {
        const { clientSecret, id } = res.data
        // console.log(res.data)
        navigate("/checkout/"+clientSecret+"/"+id);
        
      }).catch(err => {
        console.log(err.message)
      });
    }

  }


  return (

    <>
      <button onClick={() => handleCheckout()} className="bg-black text-white  w-[200px] h-[50px] mt-[20px] flex items-center mx-auto justify-center hover:bg-yellow-500"><Password /><span className="pl-2">Checkout</span></button>

    </>
  )
}

export default CheckoutButton