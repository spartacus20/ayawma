import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./checkout.css"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { axiosPrivate } from '../../Services/axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useStateValue } from "../../StateProvider"
import { StepButton } from '@mui/material';
import ShippingForm from './Forms/ShippingForm';
import PaymentmentForm from './Forms/PaymentmentForm';

const stripe = loadStripe("pk_test_51LlKpNKO3d18apjLqLK4CXIDzkLQFunwPsZp1vUPW5hgNkJ5XNhp4diCDnE8GVFFp5Xybcat6JvmUYS4UV1ETU6700TqWYEjb4")

function Checkout() {

  const [{ basket }, dispatch] = useStateValue();
  const { clientSecret } = useParams(); 
  const steps = ["Shipping Options", "Payment Options", "Resume"]
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => setActiveStep((prevStep) => prevStep + 1);
  const backStep = () => setActiveStep((prevStep) => prevStep - 1);

  const options = {
    clientSecret: clientSecret, 
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
        {/* <ShippingForm handleClick={nextStep}/> */}
        <PaymentmentForm/>
      </Elements>
    </main>
  )
}
export default Checkout