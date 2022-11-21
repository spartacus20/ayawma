import React, { useState, useEffect } from 'react'
import "./checkout.css"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import AddressForm from './Forms/AddressForm';
import { axiosPrivate } from '../../Services/axios';
import Test from './Forms/Test.jsx';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useStateValue } from "../../StateProvider"
import { StepButton } from '@mui/material';

const stripe = loadStripe("pk_test_51LlKpNKO3d18apjLqLK4CXIDzkLQFunwPsZp1vUPW5hgNkJ5XNhp4diCDnE8GVFFp5Xybcat6JvmUYS4UV1ETU6700TqWYEjb4")

function Checkout() {

  const [{ basket }, dispatch] = useStateValue();

  const steps = ["Shipping Options", "Payment Options", "Resume"]
  const [activeStep, setActiveStep] = useState(0);
  const [clientSecret, setClientSecret] = useState("")

  const nextStep = () => setActiveStep((prevStep) => prevStep + 1);
  const backStep = () => setActiveStep((prevStep) => prevStep - 1);

  // useEffect(async () => {

  //   const response = await axiosPrivate.post("/create-payment-intent", { basket })
  //   setClientSecret(response.data.clientSecret)
  //   console.log(response.data.clientSecret)
  // }, [])

  const options = {
    
    appearance: {
      theme: 'stripe'
    }
  }
  const handleStep = (step) => () => {
    setActiveStep(step);
  };


  return (
    <main className='CheckoutLayout'>
      <h1>Checkout</h1>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index} >
            <StepButton onClick={handleStep(index)}>{label}</StepButton>
          </Step>

        ))}
      </Stepper>
      <Elements options={options} stripe={stripe}>
        <Test handleClick={nextStep}/>
      </Elements>
      {/* <AddressForm/> */}
    </main>
  )
}
export default Checkout