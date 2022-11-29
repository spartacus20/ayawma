import React, { useState, useEffect} from 'react'
import  axios  from '../../Services/axios'
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound"
import ProductPage from '../ProductPage/ProductPage';

function  PageHandler() {
    const { product } = useParams();
    const [found, setFound ] = useState(false); 
    console.log(product)
    
    useEffect(() => {
        const HTTP = async () => {
            try {
                const response = await axios.get("/api/product/rato")
                console.log(response)
                setFound(true)
            }catch (err) {
                console.log(err)
                setFound(false)
            }
        }
        HTTP();
    }, [])



    return ( 
        <>
            {found? <ProductPage/>:<PageNotFound/>}
        </>
    )


       

 



}

export default PageHandler