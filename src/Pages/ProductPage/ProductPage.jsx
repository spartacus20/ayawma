import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import im1 from "../../Images/image 14.png";
import im2 from "../../Images/Foto.jpeg";
import Reviews from "./Reviews/Reviews";
import Rating from '@mui/material/Rating';

import CartIcon2 from "../../Assets/CartIcon2";
import axios from "../../Services/axios";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

function ProductPage() {
  const [{ basket }, dispatch] = useStateValue();
  const { product } = useParams();
  const [images, setImages] = useState(im1);
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState([{ price: 0 }]);
  var price = data[0].price;
  const finalPrice = price * quantity;
  

 
  
  const handleAddToCart = () => {
    
    //THE PAYLOAD IS PRODUCT INFORMATION. 
    //REDUCER RECEIVE THE (ACTIONS, PAYLOAD) 
    data[0]["quantity"] = quantity;  
    dispatch({type: actionTypes.ADD_TO_BASKET, item: data[0]})
  }
  

  const test = () => {
    window.scrollTo(0,0)
    console.log(product);
    let productFind = product.replaceAll("-", " ")
    console.log(productFind)
    document.title = productFind+" | Ayawma.com"; 
    axios.get("/api/product/" + productFind + "/info").then((res) => {
      setData(res.data.data);
    }).catch(err => {
      console.log(err)
    });
  };
  useEffect(() => {
    test();
  }, [product]);

  return (
    <>
      <Navbar />
      <div className="w-full min-h-full flex flex-col items-center xl:mt-[150px] sm:mt-[100px] ">
        <div className="xl:w-[80%] h-[100%] flex flex-col sm:w-[100%]">
         
          
          {/* Small images */}
          <div
            className="w-full h-[60%] flex mb-[40px] 
            xl:flex-row
            sm:flex-col"
          >
            
            
            <div
              className="
             xl:w-[40%] xl:h-[100%] flex 
            
             sm:w-[100%]  sm:flex-col sm:mb-[40px]
           
            "
            >
              <div
                className=" 
                 mb-[20px]
                 2xl:w-[450px] 2xl:h-[400px] 2xl:ml-[10px]
                 xl:w-[400px] xl:h-[400px] xl:ml-[0px]
                 sm:w-[300px] sm:h-[300px] sm:mx-auto "
              >
                <img
                  src={images}
                  alt=""
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <div
                className="
                
              xl:w-[80%] 2xl:ml-[0]
              xl:pl-[0px]
              sm:w-[100%] 
              sm:pl-3 sm:pr-3
              h-[55px] flex "
              >
                <div
                  className="2xl:w-[67px] sm:w-[20%] h-[100%] hover:border-2 hover:border-blue-500  border-2 border-black 2xl:ml-[10px]"
                  onMouseMove={() => setImages(im1)}
                ></div>
                <div
                  className="w-[67px] h-[100%] hover:border-2 hover:border-blue-500  border-2 border-black ml-[10px]"
                  onMouseMove={() => setImages(im2)}
                ></div>
                <div
                  className="w-[67px] h-[100%] hover:border-2 hover:border-blue-500  border-2 border-black ml-[10px]"
                  onMouseMove={() => setImages(im1)}
                ></div>
                <div
                  className="w-[67px] h-[100%] hover:border-2 hover:border-blue-500  border-2 border-black ml-[10px]"
                  onMouseMove={() => setImages(im2)}
                ></div>
                <div
                  className="w-[67px] h-[100%] hover:border-2 hover:border-blue-500  border-2 border-black ml-[10px]"
                  onMouseMove={() => setImages(im2)}
                ></div>
                <div
                  className="w-[67px] h-[100%] hover:border-2 hover:border-blue-500  border-2 border-black ml-[10px]"
                  onMouseMove={() => setImages(im2)}
                ></div>
              </div>
            </div>
            <div className="xl:w-[50%]  lg:w-[50%] md:w-[100%] sm:w-[100%] h-[100%]  flex flex-wrap flex-col">
              <h2 className="text-[31px] text-[#1A1A1A] text-left mb-[30px] sm:pl-3">
                {data[0].title}
              </h2>
              <div className="w-[50%] h-[20px] flex items-center mb-[40px] ">
                <h3 className="text-left font-bold text-[#000032] text-[25px] sm:pl-3 sm:pr-3">
                  ${data[0].price}
                </h3>
                <span className="xl:ml-[10px] text-[#B3B3B3] text-[16px] ">
                  ${data[0].price}
                </span>
              </div>
              <div className="w-[50%] h-[20px] flex items-center mb-[40px] sm:pl-3 ">
                <button
                  onClick={() => {
                    if (quantity == 1) {
                      return;
                    }
                    setQuantity(quantity - 1);
                  }}
                  className="border-2 border-black w-[25px] rounded-[8px] mr-[10px]  "
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                  className="border-2 border-black w-[25px] rounded-[8px] ml-[10px] bg-black text-white"
                >
                  +
                </button>
              </div>
              <div className="w-full h-[56px] flex items-center xl:mt-[50px] sm:mt-[20px] sm:pl-3 sm:pr-3">
                <h3 className="text-left font-bold text-[#000032] text-[22px]">
                  ${finalPrice.toFixed(2)}
                </h3>
                <button className="bg-black text-white w-[77px] h-[100%] flex items-center justify-center ml-[50px] rounded-[8px] ">
                  <span>Buy</span>
                </button>
                <button className="bg-black text-white w-[206px] h-[100%] flex items-center justify-center ml-[20px] rounded-[8px] " onClick={handleAddToCart}>
                  <CartIcon2 />
                  <span className="ml-[10px]">Add to shop cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[600px]  flex text-left flex-wrap mb-[40px] sm:pl-3 sm:pr-3">
            <p>{data[0].description}</p>
          </div>
              <Reviews productID={data[0].id}/>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
