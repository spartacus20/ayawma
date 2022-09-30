import React from 'react'

function ProductContainer({children}) {
    return (

        <div
        className="flex flex-wrap  
        border-2 border-black
      2xl:w-[100%] 2xl:h-[100%] 2xl:mt-[20px]
      xl:w-[100%] xl:h-[100%]
      lg:w-[100%] lg:h-[100%]
      sm:w-[100%] sm:h-[72%] sm:mt-[60px]
      justify-center mx-auto
       "
        >
            
            
            {children}
            
        
            </div>
    )
}

export default ProductContainer