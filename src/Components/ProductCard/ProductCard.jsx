import { Card, Text, NextUIProvider, Button } from '@nextui-org/react';
import dark from '../../Themes/Dark';
import React from 'react'

function ProductCard({ image, title, price }) {
  return (

    <Card css={{ width: '270px', marginLeft: '20px', height: '400px' }}>
      
      <Card.Body css={{position: 'absolute', top: 0,  zIndex: 1, width: '100%', height: '60%'}}>
        <img src={image} alt=""  className='mt-0 w-100 h-100' />
      </Card.Body>
      

      <Card.Footer isBlurred
        css={{
          height: '40%',
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column'
        }} >
        <Text h5  css={{marginTop:"0px", textAlign: 'center'}} >{title}</Text>
        <Text  h5 b  css={{ marginTop:"20px"}} >{price}</Text>

      </Card.Footer>

    </Card>


  )
}

export default ProductCard
