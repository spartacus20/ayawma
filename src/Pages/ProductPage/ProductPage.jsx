import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import im1 from "../../Images/image 14.png";
import StarsChecked from "../../Assets/StarsChecked";
import Chat from "../../Assets/Chat";
import CartIcon2 from "../../Assets/CartIcon2";

function getImage(index) {
  switch (index) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
  }
}

function ProductPage({ price }) {
  const index = 1;
  const [quantity, setQuantity] = useState(1);
  price = 24.29;
  const finalPrice = price * quantity;
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col items-center mt-[100px]">
        <div className="w-[80%] h-screen  flex flex-col">
          <div className="w-full h-[40px] mb-[20px] ml-[0px]">
            <h5 className="text-[#999999] text-[1.3rem] text-left">
              Home {">"} Mouse {">"} Logitech{" "}
            </h5>
          </div>
          <div className="w-full h-[60%] flex">
            <div className="w-[40%] h-[100%]  flex flex-col ">
              <img src={im1} alt="" className="w-[80%] h-[84%] mb-[20px]" />
              <div className="w-[80%] h-[12%] flex">
                <div
                  className="w-[20%] h-[100%] hover:border-2 hover:border-blue-500  border-2 border-black ml-[10px]"
                  onClick={(index = 1)}
                ></div>
                <div
                  className="w-[20%] h-[100%] hover:border-2 hover:border-blue-500  border-2 border-black ml-[10px]"
                  onClick={(index = 2)}
                ></div>
                <div
                  className="w-[20%] h-[100%] hover:border-2 hover:border-blue-500  border-2 border-black ml-[10px]"
                  onClick={(index = 3)}
                ></div>
                <div
                  className="w-[20%] h-[100%] hover:border-2 hover:border-blue-500  border-2 border-black ml-[10px]"
                  onClick={(index = 4)}
                ></div>
                <div
                  className="w-[20%] h-[100%] hover:border-2 hover:border-blue-500  border-2 border-black ml-[10px]"
                  onClick={(index = 5)}
                ></div>
                <div
                  className="w-[20%] h-[100%] hover:border-2 hover:border-blue-500  border-2 border-black ml-[10px]"
                  onClick={(index = 6)}
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
        </div>
      </div>
    </>
  );
}

export default ProductPage;
