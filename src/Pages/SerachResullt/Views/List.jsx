import { Card } from '@mui/material'
import React from 'react'
import ProductList from './ProductList'

function List({ product }) {
    return (
        <>
        {product.map( (item, index) => (
            <ProductList product={item}/>
        ))}
        </>

    )
}

export default List