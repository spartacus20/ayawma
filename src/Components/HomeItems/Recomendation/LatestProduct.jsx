import React from 'react'

import Card from '../../../Components/Card/Card';
import "./recomendation.css"

// Images
import ProMax from '../../../Images/HOME/11-promax.png'
import MiniCamera from '../../../Images/HOME/mini-camera.png'
import SonyCamera from '../../../Images/HOME/sony-camera.png'
import HPNotebook from '../../../Images/HOME/hp-notebook.png'
 

function LatestProduct() {
    return (
        <div className="LastProduct">
            <div className="LastProductText">
                <h3>Latest Products</h3>
            </div>
            <div className="Recomendation">

                <Card text="HDC 11 Promax 64Gb" img={ProMax} price="343.57"/>
                <Card text="FUJIFILM Instax Mini 11 Camera" img={MiniCamera} price="83.14"/>
                <Card text="SONY Alpha a7 III Mirrorless with FE 28-70mm Lens + microSD 128GB" img={SonyCamera} price="2218.79"/>
                <Card text="HP Pavilion x360 Convertible 14-dy0063TU" img={HPNotebook} price="948.26"/>


            </div>

        </div>
    )
}

export default LatestProduct