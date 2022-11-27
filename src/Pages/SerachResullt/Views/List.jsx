import React, { lazy, Suspense } from 'react'
import { Card } from '@mui/material'
import LazyList from './LazyList'
// import ProductList from './ProductList'
const ProductList = lazy(() => import("./ProductList"))

function List({ product }) {
    return (
        <>
            {product.map((item, index) => (
                <Suspense fallback={<LazyList/>}>
                    <ProductList product={item} key={index} />
                </Suspense>
            ))}
        </>

    )
}

export default List