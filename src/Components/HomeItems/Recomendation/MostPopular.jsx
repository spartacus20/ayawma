import React, { useEffect, useState } from 'react'
import axios from '../../../Services/axios';
import "./recomendation.css"
import Card from '../../Card/Card';

function MostPopular({ visible }) {

    
    const [rating, setRating] = useState([{}])
    const [products, setProducts] = useState([{}]);

    const test = () => {
        axios.get("/api/products/most_popular")
            .then((res) => {
                // console.log(res.data.product);
                // setProducts(res.data.product)
                console.log(products)
                const productsData = res.data.product.map((product) => {
                    const parsedImg = JSON.parse(product.images);
                    return { ...product, images: parsedImg };
                });
                setProducts(productsData);
                setRating(res.data.data)
                // console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        test();
    }, [])


    return (
        <div className={visible ? 'Recomendation' : 'hidden'}>
            {products.map((product, index) => (
                <Card text={product.title} img={product.images} price={product.price} id={product.id} key={index} stars={rating[index].mean_rating} />
            ))}

        </div>
    )
}

export default MostPopular