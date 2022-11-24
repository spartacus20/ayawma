import React from 'react'
import { AddressElement } from '@stripe/react-stripe-js';
import Button from '@mui/material/Button';
import { useStateValue } from '../../../StateProvider';
import { actionTypes } from '../../../reducer';

function ShippingForm({handleClick}) {

    const [ {shippingData}, dispatch] = useStateValue(); 

    /**
     * If the form is complete, then get the name and address values from the form and log them to the
     * console.
     */
    const formsFields = (e) => {
        if(e.complete) {
            const name = e.value.name;
            const address = e.value.address;
            console.log("gucci")
            dispatch({type: actionTypes.SET_SHIPPINGDATA, shippingData: e.value})
            console.log(shippingData)
        }
    }

    return (
        <form>
            <h3 className='my-5 text-[20px] font-semibold'>Shipping</h3>
          
            <AddressElement options={{ mode: 'shipping' }} onChange={formsFields} />
            <div className='float-right pt-1'>
                <Button onClick={handleClick}  sx={{ mr: 1 }}>
                    Next
                </Button>
            </div>
        </form>
    )
}

export default ShippingForm