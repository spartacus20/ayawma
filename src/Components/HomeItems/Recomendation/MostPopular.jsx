import React from 'react'
import "./recomendation.css"
import Card from '../../../Components/Card/Card';


function MostPopular({visible}) {
    return (
        <div className={visible ? 'Recomendation':'hidden'}>
   
            <Card stars={true} text="Hippo Ilo W2 Powerbank wireless 10000mah"/>
            <Card stars={true} text="Hippo Ilo W2 Powerbank wireless 10000mah"/>
            <Card stars={true} text="Hippo Ilo W2 Powerbank wireless 10000mah"/>
            <Card stars={true} text="Hippo Ilo W2 Powerbank wireless 10000mah"/>

        </div>
    )
}

export default MostPopular