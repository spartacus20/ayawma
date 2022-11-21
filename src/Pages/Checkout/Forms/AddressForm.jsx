import React from 'react'
import "./adressform.css"

function AddressForm() {

  const Countries = [""]
  
  return (
    <div className='AdressForm'>

      <input type="text" placeholder='Name' className='InputField InputBorder' />
      <select name="" id=""></select>
      <input type="text" placeholder='Address 1' className='InputField' />
      <input type="text" placeholder='Address 2' className='InputField' />
      <div className='flex '>
        <input type="text" placeholder='ZIP Code' className='ZIPCode InputBorder-left' />
        <input type="text" placeholder='City' className='ZIPCode InputBorder-right' />

      </div>
    

    </div>
  )
}

export default AddressForm