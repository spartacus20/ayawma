import React, { useState, useEffect } from 'react'

import axios from '../../../Services/axios';
import Card from '../../../Components/Card/Card';
import "./recomendation.css"




function LatestProduct() {
    const [products, setProducts] = useState([{}]);
    const test = () => {
        axios.get("/api/products/lastestproducts")
            .then((res) => {
                const productsData = res.data.products.map((product) => {
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
        <div className="LastProduct">
            <div className="LastProductText">
                <h3>Latest Products</h3>
            </div>
            <div className="Recomendation">

                {products.map((product, index) => (
                    <Card text={product.title} img={product.images} price={product.price} id={product.id} key={index} />
                ))}
            </div>

        </div>
    )
}

export default LatestProduct