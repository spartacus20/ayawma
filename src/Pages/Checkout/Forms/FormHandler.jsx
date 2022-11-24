import React from 'react'
import PaymentmentForm from './PaymentmentForm'
import ShippingForm from './ShippingForm'

function FormHandler({currentStep, nextStep, backStep}) {

    switch (currentStep) {
        case 0: 
            return  <ShippingForm handleClick={nextStep}/> 
        case 1: 
            return <PaymentmentForm backStep={backStep}/>
                
    }

}

export default FormHandler