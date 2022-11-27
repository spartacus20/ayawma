import React from 'react'
import "./recomendation.css"
import Card from '../../../Components/Card/Card';

// Images

import RealmeC20 from '../../../Images/HOME/realme-c20.png'
import Monitor from '../../../Images/HOME/Monitor-24.png'
import ExternalCase from '../../../Images/HOME/External-case.png'
import HardDrive from '../../../Images/HOME/2tb-hard-drive.png'

function MostPopular({visible}) {
    return (
        <div className={visible ? 'Recomendation':'hidden'}>
   
            <Card stars={true} text="Realme C20" img={RealmeC20} price="165.99"/>
            <Card stars={true} text="Monitor 24'' IPS Full HD 4 Side Virtually Borderless Design" img={Monitor} price="240.99"/>
            <Card stars={true} text="External Case HDD 2.5 USB 2.0 / Casing Hardisk Eksternal 2.5 Inch" img={ExternalCase} price="2.99"/>
            <Card stars={true} text="Hippo Ilo W2 Powerbank wireless 10000mah" img={HardDrive} price="55.72"/>

        </div>
    )
}

export default MostPopular