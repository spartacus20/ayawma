import React from 'react'
import Card from '../../../Components/Card/Card'
function Grid({ product }) {
   return (
      <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 sm:gap-y-5 lg:grid-cols-3 gap-y-12 gap-x-6'>
         {product.map((product, index) => (
            <Card text={product.title} img={product.images} price={product.price} id={product.id} key={index} />
         ))}
      </div>
   )
}

export default Grid