import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card";
import axios from "../../api/axios";
function ProductResult() {

  const [data, setData] = useState([])
  const [dropdown, setDropDown] = useState(true);
  let { product } = useParams();
 


  useEffect(() => {
    
    const test = async () => {
  
      try{
      
        const response = await axios.get('/api/product/'+product)
        setData(response.data.data) 
      
      }catch(err){

      }
    
    }
    
    test()
    
  }, [product]);
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col  ">
        {/* AQUI ES DONDE VAN A IR LOS PRODUCTOS */}
        <div className="w-[100%] h-[100px]"></div>
        <div className="w-[100%] h-[85%] 2xl:flex-row  sm:flex sm:flex-col" >
          <div className="
          2xl:w-[10%] 2xl:h-[50%]
          sm:w-[100%]  sm:mt-[20px]
          h-[10%] ">
            <div className="2xl:w-[20%] 2xl:ml-[15%] ">
              <h3 className="font-semibold text-left">Brand: </h3>
            </div>
            {/* TO DO PUT THIS IN JSON AND GET THIS IN CONSTANTS  */}
            <div className="w-[50%]  text-left mx-auto">

              <input type="checkbox" value="DELL" className="mr-[5px]" />
              <label >DELL</label><br />

              <input type="checkbox" value="LOGITECH" className="mr-[5px]" />
              <label htmlFor="">LOGITECH</label><br />

              <input type="checkbox" value="ASUS" className="mr-[5px]" />
              <label htmlFor="">ASUS</label><br />
            </div>
          </div>
          <div className="2xl:w-[80%] 2xl:mt-[20px] h-[100%] xl:w-[80%] lg:w-[80%] sm:w-[100%] sm:mt-[0px] ">
            <div className="h-[45px] flex 
                2xl:w-[80%] 2xl:mx-auto 
            ">
              <div className="border-2 border-black 2xl:w-[300px]  2xl:mr-[70%]">
              <h3 className="font-semibold text-left ">find result: "{product}"</h3>
              </div>
              <div>
                <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider"
                onClick={() => setDropDown(!dropdown)}
                className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Filter <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                <div id="dropdownDivider" className={ dropdown ?  "hidden":" absolute 2xl:ml-[800px] 2xl:mt-[10px] z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"}>
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-wrap  
              border-2 border-black
            2xl:w-[100%] 2xl:h-[100%] 2xl:mt-[20px]
            xl:w-[100%] xl:h-[100%]
            lg:w-[100%] lg:h-[100%]
            sm:w-[100%] sm:h-[72%] sm:mt-[60px]
            justify-center mx-auto
             "
            >

              {/* I neeed to iterate with json file which get the database */}
              {data.map((e) => (<Card text={e.name} key={e.id}/>))}              
            

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductResult;
