import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./checkout.css"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useStateValue } from "../../StateProvider"
import { StepButton } from '@mui/material';
import FormHandler from './Forms/FormHandler';

//DEBUG MODE. 
const stripe = loadStripe("pk_test_51LlKpNKO3d18apjLqLK4CXIDzkLQFunwPsZp1vUPW5hgNkJ5XNhp4diCDnE8GVFFp5Xybcat6JvmUYS4UV1ETU6700TqWYEjb4")

//DEPLOY MODE. 
// const stripe = loadStripe("pk_live_51LlKpNKO3d18apjLgXPz9WPeKvn5vba9TXSxr0efG3X85gVtofWhWDF2lxTZ1Hov1yrFF7PqaD9qc2ssyh4tJKJN0045d9q2CU")




function Checkout() {

  const [{ shippingData }, dispatch] = useStateValue();
  const { clientSecret } = useParams();
  const steps = ["Shipping Options", "Payment Options"]
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {

    if(Object.keys(shippingData).length === 0){
      
      toast.error("Please enter your shipping information.")
      return; 
    }
      setActiveStep((prevStep) => prevStep + 1);
    
  }
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
    <main className='CheckoutLayout mb-[150px]'>
      <h1>Checkout</h1>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index} >
            <StepButton onClick={handleStep(index)}>{label}</StepButton>
          </Step>

        ))}
      </Stepper>
      <Elements options={options} stripe={stripe}>
        <FormHandler currentStep={activeStep} nextStep={nextStep} backStep={backStep} />
      </Elements>
    </main>
  )
}
export default Checkout