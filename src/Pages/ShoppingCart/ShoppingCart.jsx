import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./shoppingcart.css"
import CartItem from "../../Components/CartItem/CartItem";
import { useStateValue } from "../../StateProvider";

import { actionTypes, getBasketTotal } from "../../reducer";
import CheckoutButton from "../../Components/Checkout/CheckoutButton";
function ShoppingCart() {
  const [{ basket }, dispatch] = useStateValue();
  const [price, setPrice] = useState(0);



  const emptyBasket = () => {
    dispatch({ type: actionTypes.EMPTY_BASKET, basket: [] })
  }
  const priceDecrement = () => {
    basket?.map((product) => {

      //The price is the total price of the product. 

      setPrice(price - product.price)
    })
  }
  const priceIncrement = () => {
    basket?.map((product) => {

      //The price is the total price of the product. 

      setPrice(price + product.price)

    })
  }

  const product = {
    title: "asdhiaghdwahd",
    price: 121
  }

  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <div className="ShoppingCart">
        <h2>Shop Cart</h2>
        <div className="container-Cart">
          <div className="Cart-container">
            <span className={basket.length < 1 ? 'textNoProducts' : 'hidden'}>No product found shop cart</span>
            {basket?.map((product) => (
              <CartItem productQuantity={product.quantity} product={product} key={product.id} priceIncrement={priceIncrement} priceDecrement={priceDecrement} />
            ))}
=======
      <div className="w-full min-h-[600px]  mt-[100px] ">
        <div className="w-[80%] mx-auto min-h-[550px]">
          <div className="font-semibold w-[20%] mb-[30px]">
            <h3 className="text-[25px] text-[#333333]">Shop cart</h3>
          </div>
          <div className="h-[80%]">
            <div className="flex sm:flex-col">
              <div className={basket.length < 1 ? "mr-auto h-[40px] mt-[50px]  w-[50%]  " : "hidden"}>
                <span className="text-[#808080] text-[16px]">
                  No product found in shop cart
                </span>
              </div>

              {/* Shopping card container */}
              <div className="flex w-full">
                <div className="w-[80%]">
                  {/* CART ITEEM HERE */}
                  {basket?.map((product) => (
                    <CartItem productQuantity={product.quantity} product={product} key={product.id} priceIncrement={priceIncrement} priceDecrement={priceDecrement} />
                  ))}
                </div>

                {/* Checkout button and  price */}
                <div className={basket.length < 1 ? "w-[60%] h-[300px]  justify-center " : "w-[30%] h-[300px]  justify-center"}>


                  
                  
                  <div className="flex">
                    <div className="w-[50%] text-left"><span className="pl-2">Shipping cost</span></div>
                    <div className="w-[50%] text-right"><span className="pr-2">TBD</span></div>
                  </div>
                 
                  <div className="flex">
                    <div className="w-[50%] text-left"><span className="pl-2">Tax</span></div>
                    <div className="w-[50%] text-right"><span className="pr-2">TBD</span></div>
                  </div>
                  <div className="flex mb-5">
                    <div className="w-[50%] text-left"><span className="pl-2 font-semibold">Total</span></div>
                    <div className="w-[50%] text-right"><span className="pr-2 font-semibold">${getBasketTotal(basket).toFixed(2)} </span></div>
                  </div>
                    <CheckoutButton/>
                </div>

              </div>

            </div>




>>>>>>> 391f499ba9e798f46b3d46aae475e0e8ad177685

          </div>
          <div className="Checkout">
              <div className="Checkout-divider">
                <span>Shipping cost</span>
                <span>TBD</span>
              </div>
              <div className="Checkout-divider">
                <span>Tax</span>
                <span>TBD</span>
              </div>
              <div className="Checkout-divider">
                <span>Total</span>
                <span>{getBasketTotal(basket).toFixed(2)} €</span>
              </div>
              <CheckoutButton/>
          </div>
        </div>
        <div className="Items1">
          <span className="p-2">Items: {basket.length}</span>
          <button className="p-2" onClick={emptyBasket}>Clear Cart</button>
        </div>
      </div>

    </>
  );
}

export default ShoppingCart;
