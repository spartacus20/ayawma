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
  const [{ gridView }, dispatch] = useStateValue();
  let { product } = useParams();
  const handleViews = () => {
    console.log(gridView)
    if (gridView) {
      return <List product={data} />
    }
    return <Grid product={data} />
  }
  useEffect(() => {
    window.scrollTo(0, 0);
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
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className='flex w-[85vw] my-16 mx-auto xl:mt-[150px]'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-12'>
            <div className='sticky lg:col-span-1'>
              <Filters filters="asd" />
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
