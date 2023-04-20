import React from 'react'
import axios from '../../Services/axios';
import Password from "../../Assets/Password";
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../reducer';
import { Authentication } from '../../Services/Authentication';
function CheckoutButton() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  const handleCheckout = async () => {

    const user = await Authentication() 
    if(basket.length > 0 && user ){ 
      axios.post("/create-payment-intent", {
        basket
      }).then(res => {
        const { clientSecret, id } = res.data
        // console.log(res.data)
        dispatch({type: actionTypes.SET_CLIENT_SECRET, clientSecret: clientSecret})
        navigate("/checkout/"+clientSecret+"/"+id);
        // if (res.data.url) {
        //   window.location.href = res.data.url;
        // }
      }).catch(err => {
        console.log(err.message)
      });
    }else{
       navigate("/signin");
    }

  }


  return (

    <>
      <button onClick={() => handleCheckout()} className="bg-black text-white  w-[200px] h-[50px] mt-[20px] flex items-center mx-auto justify-center hover:bg-yellow-500"><Password /><span className="pl-2">Checkout</span></button>

    </>
  )
}

export default CheckoutButton