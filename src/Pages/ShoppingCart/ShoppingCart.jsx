import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./shoppingcart.css"
import CartItem from "../../Components/CartItem/CartItem";
import Password from "../../Assets/Password";
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
      <div className="ShoppingCart">
        <h2>Shop Cart</h2>
        <div className="container-Cart">
          <div className="Cart-container">
            <span className={basket.length < 1 ? 'textNoProducts' : 'hidden'}>No product found shop cart</span>
            {basket?.map((product) => (
              <CartItem productQuantity={product.quantity} product={product} key={product.id} priceIncrement={priceIncrement} priceDecrement={priceDecrement} />
            ))}

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
