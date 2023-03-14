import React from 'react'
import Card from '../../../Components/Card/Card';

import "./recomendation.css"

function MostTrending({ visible }) {

    return (

        <div className={visible ? 'Recomendation' : 'hidden'}>

            <Card stars={true} text="SAMSUNG 32 Inch TV LED UA32T4003" id={1}/>
            <Card stars={true} text="SAMSUNG 32 Inch TV LED UA32T4003" id={1}/>
            <Card stars={true} text="SAMSUNG 32 Inch TV LED UA32T4003" id={1}/>
            <Card stars={true} text="SAMSUNG 32 Inch TV LED UA32T4003" id={1}/>

        </div>



    )
}

export default MostTrending