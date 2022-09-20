import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import im1 from "../../Images/image 14.png";
import im2 from "../../Images/Foto.jpeg";
import StarsChecked from "../../Assets/StarsChecked";
import Chat from "../../Assets/Chat";
import CartIcon2 from "../../Assets/CartIcon2";

function ProductPage({ price }) {
  const [images, setImages] = useState(im1);
  const [quantity, setQuantity] = useState(1);
  price = 24.29;
  const finalPrice = price * quantity;
  return (
    <>
      <Navbar />
      <div className="w-full min-h-full flex flex-col items-center mt-[100px]">
        <div className="2xl:w-[80%] h-[100%] flex flex-col sm:w-[100%]">
          <div className="w-full h-[40px] mb-[20px] ml-[0px]">
            <h5 className="text-[#999999] text-[1.3rem] text-left">
              Home {">"} Mouse {">"} Logitech{" "}
            </h5>
          </div>
          <div className="w-full h-[60%] flex mb-[40px] 
          border-2 border-black
          2xl:flex-row
          sm:flex-col">
            <div className="
             
             2xl:w-[40%] 2xl:h-[100%] flex 
         
             sm:w-[100%]  sm:flex-col sm:mb-[40px]
            ">
              <div
                className=" 
                 mb-[20px]
                 2xl:w-[500px] 2xl:h-[500px] 2xl:ml-[0px]
                 xl:w-[400px] xl:h-[400px]
                 sm:w-[300px] sm:h-[300px] sm:mx-auto "
              

              >
                <img
                  src={images}
                  alt=""
                  className="object-cover w-[100%] h-[100%]"
                />
              </div>

              <div className="
              2xl:w-[80%] 2xl:ml-[0]
              sm:w-[100%] 
              h-[55px] flex border-2  border-black">
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
            <div className="w-[50%] h-[100%]  flex flex-wrap flex-col">
              <h2 className="text-[31px] text-[#1A1A1A] text-left mb-[10px]">
                LOGITECH Pop Mouse
              </h2>
              <div className="w-[50%] h-[20px] flex items-center mb-[30px]">
                <StarsChecked />
                <StarsChecked />
                <StarsChecked />
                <StarsChecked />
                <StarsChecked />
                <span className="text-[#999999] ml-[10px]">(10000)</span>
              </div>
              <div className="w-[50%] h-[20px] flex items-center mb-[40px]">
                <h3 className="text-left font-bold text-[#000032] text-[25px]">
                  ${price}
                </h3>
                <span className="ml-[10px] text-[#B3B3B3] text-[16px]">
                  $24.98
                </span>
              </div>
              <div className="w-[50%] h-[20px] flex items-center mb-[40px]">
                <button
                  onClick={() => {
                    if (quantity == 1) {
                      return;
                    }
                    setQuantity(quantity - 1);
                  }}
                  className="border-2 border-black w-[25px] rounded-[8px] mr-[10px]"
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
              <div className="w-[100%] h-[56px] flex items-center flex-wrap mb-[30px]  ">
                <img
                  src={im1}
                  alt=""
                  className="w-[56px] h-[100%] rounded-[50px] object-fill border-2 border-black mr-[10px]"
                />
                <span className="font-semibold ">Mouse fit</span>
                <button className="bg-black text-white w-[96px] h-[80%] flex items-center justify-center ml-[150px] rounded-[8px] ">
                  <Chat />
                  <span className="ml-[10px]">Chat</span>
                </button>
              </div>
              <div className="w-full h-[56px] flex items-center">
                <h3 className="text-left font-bold text-[#000032] text-[22px]">
                  ${finalPrice.toFixed(2)}
                </h3>
                <button className="bg-black text-white w-[77px] h-[100%] flex items-center justify-center ml-[50px] rounded-[8px] ">
                  <span>Buy</span>
                </button>
                <button className="bg-black text-white w-[206px] h-[100%] flex items-center justify-center ml-[20px] rounded-[8px] ">
                  <CartIcon2 />
                  <span className="ml-[10px]">Add to shop cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[600px] border-2 border-black flex text-left flex-wrap mb-[40px]">
            <p>lorem*60</p>
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