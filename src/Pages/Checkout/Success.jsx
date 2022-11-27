import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Cookies from "universal-cookie";
import { useStripe } from '@stripe/react-stripe-js'
import axios from '../../Services/axios';
import { useStateValue } from '../../StateProvider';
function Success() {

    const cookie = new Cookies();
    const [{basket}, dispatch] = useStateValue
    const { clientSecret } = useParams();
    const [paid, setPaid ] = useState(false);
    const [message, setMessage] = useState("");
    const stripe = useStripe();

    const token = cookie.get("jid")

    useEffect(async () => {

    

        const response = await axios.post("/set-order", {token, basket})
        console.log(response.data)
        // stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        //     switch (paymentIntent.status) {
        //         case "succeeded":
        //             setMessage("Payment succeeded!");
        //             setPaid(true)
        //             //POST/ ORDER 
        //             break;
        //         case "processing":
        //             setMessage("Your payment is processing.");
        //             break;
        //         case "requires_payment_method":
        //             setMessage("Your payment was not successful, please try again.");
        //             break;
        //         default:
        //             setMessage("Something went wrong.");
        //             break;
        //     }
        // })
    }, [])


    return (
        <div>


                asdasdsa

        </div>
    )
}

export default Success