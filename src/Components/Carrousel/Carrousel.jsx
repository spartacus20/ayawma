import React from 'react'
import { Carousel } from 'react-bootstrap';

import data from '../../Pages/Home/Data.json'



function Carrousel() {
    return (
        <div className="carrousel-container mt-20  ">
            <Carousel>

                {data.carrousel.map((item) => (

                    <Carousel.Item key={item.id} >
                        <img src={item.imagen} alt="" className="w-100"/>
                    </Carousel.Item>

                ))}


            </Carousel>
        </div>
    )
}

export default Carrousel