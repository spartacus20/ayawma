import React from 'react'
import "./recomendation.css"
import Card from '../Card/Card'; 

function MostPopular({visible}) {
    return (
        <div className={visible ? 'Recomendation':'hidden'}>
          
           {/* flex justify-center items-center flex-wrap w-[100%] h-[600px] xl:mt-[0px] 2xl:mt-[0px] lg:mt-[100px] md:mt-[100px] sm:mt-[0px] bg-[#F2F2F2] */}
          
           
            
            <Card stars={true} text="Hippo Ilo W2 Powerbank wireless 10000mah"/>
            <Card stars={true} text="Hippo Ilo W2 Powerbank wireless 10000mah"/>
            <Card stars={true} text="Hippo Ilo W2 Powerbank wireless 10000mah"/>
            <Card stars={true} text="Hippo Ilo W2 Powerbank wireless 10000mah"/>


        </div>
    )
}

export default MostPopular