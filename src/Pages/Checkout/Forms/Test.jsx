import React from 'react'
import { AddressElement } from '@stripe/react-stripe-js';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
function Test({handleClick}) {
    return (
        <form>
            <h3>Shipping</h3>
            <AddressElement options={{ mode: 'shipping' }} />
            <div className='float-right pt-1'>
                <Button onClick={handleClick} sx={{ mr: 1 }}>
                    Next
                </Button>
            </div>
        </form>
    )
}

export default Test