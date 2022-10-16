import React from 'react'

import Card from '../Card/Card'


function LatestProduct() {
    return (
        <div className="
        flex flex-wrap  


        2xl:w-[80%] 2xl:h-[500px] 2xl:mt-[100px]
        xl:w-[80%] xl:h-[500px]  xl:mt-[100px]
        lg:w-[80%] lg:h-[500px]  lg:mt-[100px]
        md:w-[80%] md:h-[500px] md:mt-[0px]
        sm:w-[100%] sm:h-[72%] sm:mt-[0px]
        items-center
         mx-auto 
      


    ">

            <div className="
              mt-[50px] 
              2xl:ml-[130px]
              xl:ml-[130px]
              lg:ml-[130px]
              md:ml-[130px]
              sm:ml-[0px]">
            <span className='font-semibold font-[20px] text-[30px] pl-2'>Lastest Prododucts</span>
            </div>
               
               
            <div className='
            flex justify-center items-center flex-wrap 
            w-[100%] h-[600px] 
            2xl:mt-[-100px]
            xl:mt-[-100px] 
            lg:mt-[-100px] 
            md:mt-[0px] 
            sm:mt-[10px]     
            '>

                <Card text="Hippo Ilo W2 Powerbank wireless 10000mah" />
                <Card text="Hippo Ilo W2 Powerbank wireless 10000mah" />
                <Card text="Hippo Ilo W2 Powerbank wireless 10000mah" />
                <Card text="Hippo Ilo W2 Powerbank wireless 10000mah" />


            </div>

        </div>
    )
}

export default LatestProduct