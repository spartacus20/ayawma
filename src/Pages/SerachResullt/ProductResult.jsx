import React, { useState, useEffect } from "react";
import "./productresult.css"
import { useParams } from "react-router-dom";
import ProductContainer from "../../Components/ProductContainer/ProductContainer"
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card";
import axios from "../../api/axios";
function ProductResult() {

  const [data, setData] = useState([])
  const [dropdown, setDropDown] = useState(true);
  let { product } = useParams();

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
      <div className="pageResult">

        <div className="Divider">
          <span>find result "{product}"</span>
          <div className="Filter">
            <span>Filter</span>
            <button></button>
          </div>
       </div>


        <ProductContainer>
         
          {/* I neeed to iterate with json file which get the database */}
          {data.map((e) => (<Card text={e.title} key={e.id} />))}

        </ProductContainer>
      </div>






    </>
  );
}

export default ProductResult;
