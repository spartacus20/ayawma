import React, { useState, useEffect } from "react";
import "./productresult.css"
import { FiChevronDown } from "react-icons/fi"
import { useParams } from "react-router-dom";
import ProductContainer from "../../Components/ProductContainer/ProductContainer"
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card";
import axios from "../../Services/axios";
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
      <div className="pageResult">

        <div className="Divider">
          <span>{data.length} results for "{product}"</span>
          <div className="Filter" onClick={rotateIcon}>
            <span>Sort by</span>
            <div id="Icon">
              <FiChevronDown size={30} />
            </div>
            <div className={dropdown? "Dropdown":"inactive"}>
                <button className="Button">Featured</button>
                <button className="Button">Newest</button>
                <button className="Button">Price: High-Low</button>
                <button className="Button">Price: Low-Hight</button>
            </div>
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
