import React, { useState, useEffect } from "react";
import "./productresult.css"
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "../../Services/axios";
import Sort from "./Filers/Sort";
import Filters from "./Filers/Filters.jsx";
import Grid from "./Views/Grid";
import List from "./Views/List";
import { useStateValue } from "../../StateProvider";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: .3 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

function ProductResult() {
  const [data, setData] = useState([])
  const [originalData, setOriginalData] = useState([])
  const [{ gridView, sortby, price_between }, dispatch] = useStateValue();
  const [maxPrice, setmaxPrice] = useState(100);
  let { product } = useParams();

  const ChangeFilter = (filter) => {
    let new_products = []
    if (filter === "A_TO_Z") {
      new_products = data.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      })
    } else if (filter === "Z_TO_A") {
      new_products = data.sort((a, b) => {
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        return 0;
      })
    } else if (filter === "LOWEST") {
      new_products = data.sort((a, b) => {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
      })
    } else if (filter === "HIGHEST") {
      new_products = data.sort((a, b) => {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      })
    }else if(filter === "ALL"){
        new_products = [...originalData]
     }else if(filter === "BETWEEN"){
        new_products = originalData.filter(( product => product.price <= price_between))
     }
     setData([...new_products])

  }

  const handleViews = () => {
      if (gridView) {
        return <List product={data} />
      }
      return <Grid product={data} />

  }

  const asignMaxPriceToFilter = (dates) => {
    let price = dates.map( product => product.price)
    price = Math.max(...price)
    setmaxPrice(price)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const test = async () => {
      try {
        const response = await axios.get(`/api/product/${product}`)
        setData(response.data.data)
        setOriginalData(response.data.data)
        console.log(response.data.data)
        asignMaxPriceToFilter(response.data.data)

      } catch (err) {
        console.log(err)
      }
    }

    test()

  }, [product]);


  useEffect(() => {
    ChangeFilter(sortby);
  }, [sortby]);

  useEffect(() => {
    ChangeFilter(sortby);
  }, [price_between]);



  return (
    <>
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className='flex w-[85vw] my-16 mx-auto xl:mt-[150px]'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-12'>
            <div className='sticky lg:col-span-1'>
              <Filters maxPrice={maxPrice} />
            </div>
            <div className='mb-[20rem] md:col-span-2 lg:col-span-4'>
              <div className='w-full flex flex-col'>
                <Sort totalProducts={data.length} />
                {handleViews()}
              </div>
            </div>
          </div>
        </div>
      </motion.main>





    </>
  );
}

export default ProductResult;
