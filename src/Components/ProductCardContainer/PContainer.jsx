import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
function PContainer() {
    return (
            <Grid.Container css={{ display: 'flex', height: '400px', }} justify="center">
                <Grid xs={3} >
                    <ProductCard image={im1} price="360$" title="Tarjeta Grafica Nvidia RTX 3090 ti " />
                </Grid>
                <Grid xs={3} >
                    <ProductCard image={im1} title="Tarjeta Grafica Nvidia RTX 3090 ti " />
                </Grid>
                <Grid xs={3} >
                    <ProductCard image={im1} title="Tarjeta Grafica Nvidia RTX 3090 ti " />
                </Grid>
                <Grid xs={3} >
                    <ProductCard image={im1} title="Tarjeta Grafica Nvidia RTX 3090 ti " />
                </Grid>
                <Grid xs={3} >
                    <ProductCard image={im1} title="Tarjeta Grafica Nvidia RTX 3090 ti " />
                </Grid>
                <Grid xs={3} >
                    <ProductCard image={im1} title="Tarjeta Grafica Nvidia RTX 3090 ti " />
                </Grid>



            </Grid.Container>
    )
}

export default PContainer