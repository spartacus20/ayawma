import Prueba from "./Prueba";
import ProductCard from "./Components/ProductCard/ProductCard";
import { Text, Grid, NextUIProvider } from "@nextui-org/react"
import dark from "./Themes/Dark";
import im1 from "./images/grafica.jpg"
function Render() {
    return (


        <Grid.Container css={{ display: 'flex', height: '400px', }} justify="center">
            <Grid xs={3} >
                <ProductCard  image= {im1} price="360$" title="Tarjeta Grafica Nvidia RTX 3090 ti " />
            </Grid>
            <Grid xs={3} >
                <ProductCard  image= {im1} title="Tarjeta Grafica Nvidia RTX 3090 ti " />
            </Grid>
            <Grid xs={3} >
                <ProductCard  image= {im1} title="Tarjeta Grafica Nvidia RTX 3090 ti " />
            </Grid>
            <Grid xs={3} >
                <ProductCard  image= {im1} title="Tarjeta Grafica Nvidia RTX 3090 ti " />
            </Grid>
            <Grid xs={3} >
                <ProductCard  image= {im1} title="Tarjeta Grafica Nvidia RTX 3090 ti " />
            </Grid>
            <Grid xs={3} >
                <ProductCard  image= {im1} title="Tarjeta Grafica Nvidia RTX 3090 ti " />
            </Grid>
          
            

        </Grid.Container>









    );
}

export default Render;
