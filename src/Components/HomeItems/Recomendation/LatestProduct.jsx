import React from 'react'

import Card from '../../../Components/Card/Card';

import "./recomendation.css"

function LatestProduct() {
    return (
        <div className="LastProduct">
            <div class="LastProductText">
                <h3>Latest Products</h3>
            </div>
            <div className="Recomendation">

                <Card text="Hippo Ilo W2 Powerbank wireless 10000mah" />
                <Card text="Hippo Ilo W2 Powerbank wireless 10000mah" />
                <Card text="Hippo Ilo W2 Powerbank wireless 10000mah" />
                <Card text="Hippo Ilo W2 Powerbank wireless 10000mah" />


            </div>

        </div>
    )
}

export default LatestProduct