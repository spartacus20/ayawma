import React, { useState } from "react";

function CartItem({ image, productQuantity}) {
  const [quantity, setQuantity] = useState(productQuantity);
  return (
    <div className="w-[100%] h-[150px] flex  mb-5">
      <div className="w-[200px] h-[100%] rounded-2xl ">
        <img src={image} alt="" className="w-[100%] h-[100%] object-cover rounded-2xl" />
      </div>
      <div className="w-[50%] h-[100%] ">
        <div className="w-100  text-left ml-3 mb-5 ">
          <span className="text-[25px]">LOGITECH Pop Mouse</span>
        </div>
        <div className="w-60 ml-3 text-left flex items-center mb-2">
          
          <span className="mr-5 text-[23px]">$24.29</span>

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
        <div className="flex justify-start">
          <button className="pl-5 hover:text-red-500">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
