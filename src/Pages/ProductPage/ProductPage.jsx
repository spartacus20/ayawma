import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./productpage.css"
import Navbar from "../../Components/Navbar/Navbar";
import im1 from "../../Images/image 14.png";
import im2 from "../../Images/monitor.png";
import Reviews from "./Reviews/Reviews";
import { Navigate } from "react-router-dom";
import CartIcon2 from "../../Assets/CartIcon2";
import axios from "../../Services/axios";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import html_to_react from 'html-to-react';



function ProductPage() {

  const BACKEND_URL = "http://localhost:3001/images/";
  const [{ basket }, dispatch] = useStateValue();
  const { product, id } = useParams();
  const [images, setImages] = useState(im1);
  const [imageActive, setImageActive] = useState(im1);
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState([{ price: 0 }]);
  var price = data[0].price || 9.99;
  const finalPrice = price * quantity;
  const navigate = useNavigate();





  const handleAddToCart = () => {

    //THE PAYLOAD IS PRODUCT INFORMATION. 
    //REDUCER RECEIVE THE (ACTIONS, PAYLOAD) 
    data[0]["quantity"] = quantity;
    dispatch({ type: actionTypes.ADD_TO_BASKET, item: data[0] })
  }

  const handleBuy = () => {

    data[0]["quantity"] = quantity;
    dispatch({ type: actionTypes.ADD_TO_BASKET, item: data[0] })

    axios.post("/create-payment-intent", {
      basket
    }).then(res => {
      const { clientSecret, id } = res.data
      // console.log(res.data)
      dispatch({ type: actionTypes.SET_CLIENT_SECRET, clientSecret: clientSecret })
      navigate("/checkout/" + clientSecret + "/" + id);

      // if (res.data.url) {
      //   window.location.href = res.data.url;
      // }
    }).catch(err => {
      console.log(err.message)
    });


  }

  const diminueQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }



  const test = async () => {
    window.scrollTo(0, 0)
    console.log(product);
    let productFind = product.replaceAll("-", " ")
    console.log(productFind)
    console.log("id: " + id)
    axios.get("api/product/" + id + "/edit").then((res) => {
      setData(res.data.data);
      // console.log(res.data.data[0].images)
      let prueba = JSON.parse(res.data.data[0].images)
      document.title = res.data.data[0].title + " | Ayawma.com";

      setImages(prueba)
      setImageActive(prueba[0].url)

      const reactElements = html_to_react(res.data.data[0].description)
      console.log(reactElements)
      setDescription(reactElements)
      console.log(res.data.data[0].images)

    }).catch(err => {
      console.log(err)
    });
  };
  useEffect(() => {
    test();
  }, [product]);

  return (
    <div className="xl:w-[80%] xl:mt-[150px] sm:w-[98%] sm:mt-[100px] mx-auto  flex flex-col px-8">
      <div className="flex w-[100%] xl:flex-row sm:flex-col mb-8">
        <div className="xl:w-[40%] sm:[90%] sm:mb-5">
          <img src={imageActive} alt="" className="object-contain h-[400px] w-[100%] xl:ml-2 xl:mb-3" />
          <div className="flex xl:px-10">
            <div className="w-[70px] h-[67px] border-2 border-black mr-3"  >
              <img src={images[0].url} alt="" className="object-contain w-[100%] h-[98%]" onClick={() => setImageActive(images[0].url)} onMouseOver={() => setImageActive(images[0].url)} />
            </div>
            <div className="w-[70px] h-[67px] border-2 border-black mr-3">
              <img src={images[1].url} alt="" className="object-contain w-[100%] h-[98%]" onClick={() => setImageActive(images[1].url)} onMouseOver={() => setImageActive(images[1].url)} />
            </div>
            <div className="w-[70px] h-[67px] border-2 border-black mr-3">
              <img src={images[2].url} alt="" className="object-contain w-[100%] h-[98%]" onClick={() => setImageActive(images[2].url)} onMouseOver={() => setImageActive(images[2].url)} />
            </div>
            <div className="w-[70px] h-[67px] border-2 border-black mr-3">
              <img src={images[3].url} alt="" className="object-contain w-[100%] h-[98%]" onClick={() => setImageActive(images[3].url)} onMouseOver={() => setImageActive(images[3].url)} />
            </div>

          </div>

        </div>
        <div className="xl:w-[50%] sm:w-[99%] flex flex-col xl:px-8">
          <div className="flex mb-4">
            <h1 className="xl:text-2xl sm:text-xl font-bold">
              {data[0].title}
            </h1>
          </div>
          <span className="xl:text-2xl sm:text-2xl font-semibold mb-10">{price.toFixed(2)} €</span>
          <div className="flex items-center xl:mb-24 sm:mb-16">
            <button className="rounded-[8px] border-2 border-black mr-3 text-center w-[25px]" onClick={diminueQuantity}>-</button>
            <span>{quantity}</span>
            <button className="ml-3 rounded-[8px] bg-black text-white text-center w-[25px]" onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <div className="flex items-center">
            <span className="xl:text-xl sm:text-lg mr-7 ">{finalPrice.toFixed(2)} €</span>
            <button className="xl:text-lg sm:text-md bg-black text-white rounded-lg xl:w-[77px] sm:w-[50px] h-[46px] mr-5">Buy</button>
            <div className="flex items-center px-3 xl:text-lg sm:text-md bg-black text-white rounded-lg xl:w-[206px] h-[46px] justify-center" onClick={handleAddToCart}>
              <CartIcon2 />
              Add to shop cart
            </div>
          </div>

        </div>

      </div>
      <div className="xl:px-9 ">
        <h2 className="text-2xl font-bold mb-5">Description</h2>
        <div className="w-[100%] min-h-[500px] xl:mb-7">
          <div dangerouslySetInnerHTML={{ __html: data[0].description }} className="description"/>

        </div>
        <Reviews productID={data[0].id} />
      </div>


    </div>
  );
}

export default ProductPage;
