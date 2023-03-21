import React, { useEffect, useState } from 'react'
import axios from '../../../Services/axios';
import Card from '../../../Components/Card/Card';

import "./recomendation.css"

function MostTrending({ visible }) {
    const [products, setProducts] = useState([{}]);
    const test = () => {
        axios.get("/api/products/get/4")
            .then((res) => {
                const productsData = res.data.data.map((product) => {
                    const parsedImg = JSON.parse(product.images);
                    return { ...product, images: parsedImg };
                });
                setProducts(productsData);
            }).catch((err) => {
                setProducts([{}]);
            })
    }

    useEffect(() => {
        test();
    }, [])


    return (

        <div className={visible ? 'Recomendation' : 'hidden'}>

            {products.map((product, index) => (
                <Card text={product.title} img={product.images} price={product.price} id={product.id} key={index} />
            ))}
        </div>



    )
}

export default MostTrending