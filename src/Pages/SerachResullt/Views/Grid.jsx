import React from 'react'
import Card from '../../../Components/Card/Card'
function Grid({ product }) {
  const BACKEND_URL = "http://localhost:3001/images/"; 
  return (
     <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 sm:gap-y-5 lg:grid-cols-3 gap-y-12 gap-x-6'>
         {product.map( (item, index) => (
            <Card text={item.title} price={item.price} img={item.images} id={item.id} /> 
         ))}
     </div>
  )
}

export default Grid