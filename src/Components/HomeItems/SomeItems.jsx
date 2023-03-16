import React, { lazy, Suspense, useEffect, useState } from 'react'
// import Card from '../../Components/Card/Card';
// Images

import axios from '../../Services/axios'

import ps4 from '../../Images/HOME/controller-ps4.png'
import powerbank from '../../Images/HOME/hippo-powerbank.png'
import asus from '../../Images/HOME/asus-notebook.png'
import SamsungA03 from '../../Images/HOME/samsung-a03.png'
import SamsungTV from '../../Images/HOME/samsung-32-tv.png'
import LGmouse from '../../Images/HOME/lg-mouse.png'
import AcerAll from '../../Images/HOME/acer-all-in-one.png'
import TPLink from '../../Images/HOME/tp-link-router.png'
import LazyCard from '../Lazy/LazyCard';

const Card = lazy(() => import("../Card/Card"))





function SomeItems() {

  const [products, setProducts] = useState([{}]);
  const test = () => {
    axios.get("/api/products/get/8")
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
    <div className='Container-2 Spacer-2'>
      <Suspense fallback={<LazyCard />}>
        {products.map((product, index) => (
          <Card text={product.title} img={product.images} price={product.price} id={product.id} key={index}/>
        ))}
      </Suspense>

    </div>
  )
}

export default SomeItems
