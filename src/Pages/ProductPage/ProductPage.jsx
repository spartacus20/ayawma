import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import im1 from "../../Images/image 14.png";
import im2 from "../../Images/Foto.jpeg";
import StarsChecked from "../../Assets/StarsChecked";
import Arrow from "../../Assets/Arrow";
import Chat from "../../Assets/Chat";
import Home from "../../Assets/Home";
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
      <div className="w-full min-h-full flex flex-col items-center mt-[100px]">
        <div className="2xl:w-[80%] h-[100%] flex flex-col sm:w-[100%]">
          <div className="w-full h-[40px] mb-[20px] ml-[0px]">
            
          </div>
          
          {/* Small images */}
          <div
            className="w-full h-[60%] flex mb-[40px] 
        
            2xl:flex-row
            sm:flex-col"
          >
            
            
            <div
              className="
             2xl:w-[40%] 2xl:h-[100%] flex 
          
             sm:w-[100%]  sm:flex-col sm:mb-[40px]
           
            "
            >
              <div
                className=" 
                 mb-[20px]
                 2xl:w-[450px] 2xl:h-[400px] 2xl:ml-[10px]
                 xl:w-[400px] xl:h-[400px]
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
                
              2xl:w-[80%] 2xl:ml-[0]
              2xl:pl-[0px]
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
            <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] h-[100%]  flex flex-wrap flex-col">
              <h2 className="text-[31px] text-[#1A1A1A] text-left mb-[10px] sm:pl-3">
                {data[0].title}
              </h2>
              <div className="w-[50%] h-[20px] flex items-center mb-[30px] sm:pl-3 ">
                <StarsChecked />
                <StarsChecked />
                <StarsChecked />
                <StarsChecked />
                <StarsChecked />
                <span className="text-[#999999] ml-[10px]">(10000)</span>
              </div>
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
              {/* <div className="w-[100%] h-[56px] flex items-center flex-wrap mb-[30px]  ">
                <img
                  src={im1}
                  alt=""
                  className="w-[56px] h-[100%] rounded-[50px] object-fill border-2 border-black mr-[10px]"
                />
                <span className="font-semibold border-2 border-black">Mouse fit</span>
                <button className="bg-black text-white w-[96px] h-[80%] flex items-center justify-center 2xl:ml-[150px] xl:ml-[150px] lg:ml-[150px] md:ml-[150px] sm:ml-[150px] rounded-[8px] ">
                  <Chat />
                  <span className="ml-[10px]">Chat</span>
                </button>
              </div> */}
              <div className="w-full h-[56px] flex items-center xl:mt-[100px] sm:mt-[20px] sm:pl-3 sm:pr-3">
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
          <div className="flex h-[50px] items-center  ">
            <span className="font-semibold text-[20px] mr-[20px] ">Review</span>
            <StarsChecked />
            <StarsChecked />
            <StarsChecked />
            <StarsChecked />
            <StarsChecked />
            <textarea
              name=""
              id=""
              cols="60"
              rows="2"
              className="ml-[70px]  rounded-[8px] border-2 border-[#999999]"
            ></textarea>
            <button className="bg-black text-white w-[77px] h-[100%] flex items-center justify-center ml-[50px] rounded-[8px] ">
              <span>Ask</span>
            </button>
          </div>
          <div className="flex min-h-[200px] items-center"></div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
