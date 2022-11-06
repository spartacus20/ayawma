import React, { useState, useEffect } from "react";
import "./productresult.css"
import { FiChevronDown } from "react-icons/fi"
import { useParams } from "react-router-dom";
import ProductContainer from "../../Components/ProductContainer/ProductContainer"
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card";
import axios from "../../Services/axios";
import Sort from "./Filers/Sort";
import Filters from "./Filers/Filters.jsx";
function ProductResult() {

  const [data, setData] = useState([])
  const [dropdown, setDropDown] = useState(false);
  let { product } = useParams();
  const rotateIcon = () => {
    setDropDown(!dropdown)
    let element = document.getElementById("Icon");
    element.classList.toggle("rotate");
  }
  useEffect(() => {

    const test = async () => {

      try {

        const response = await axios.get('/api/product/' + product)
        setData(response.data.data)

      } catch (err) {
        console.log(err)
      }

    }

    test()

  }, [product]);



  return (
    <>
      <Navbar />
      <div className='flex w-[85vw] my-16 mx-auto xl:mt-[150px]'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-12'>
          <div className='sticky lg:col-span-1'>
            <Filters filters="asd" />
          </div>
          <div className='mb-[20rem] md:col-span-2 lg:col-span-4'>
            <div className='w-full flex flex-col'>
              <Sort />
              
          </div>
        </div>
      </div>
    </div>






    </>
  );
}

export default ProductResult;
