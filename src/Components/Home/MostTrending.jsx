import React from 'react'
import Card from '../Card/Card'
function MostTrending({visible}) {

    var isVisible = visible; 

    return (

            <div className={isVisible ? 'flex justify-center items-center flex-wrap w-[100%] h-[600px] xl:mt-[0px] 2xl:mt-[0px] lg:mt-[100px] md:mt-[100px] sm:mt-[0px] bg-[#F2F2F2]' : 'hidden'}>

                <Card stars={true} text="SAMSUNG 32 Inch TV LED UA32T4003" />
                <Card stars={true} text="SAMSUNG 32 Inch TV LED UA32T4003" />
                <Card stars={true} text="SAMSUNG 32 Inch TV LED UA32T4003" />
                <Card stars={true} text="SAMSUNG 32 Inch TV LED UA32T4003" />

            </div>


       
    )
}

export default MostTrending