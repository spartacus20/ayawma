import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card";
function ProductResult() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col  ">
        {/* AQUI ES DONDE VAN A IR LOS PRODUCTOS */}
        <div className="w-[100%] h-[100px] bg-red-100"></div>
        <div className="w-[100%] h-[90%]   2xl:flex-row  sm:flex sm:flex-col" >
          <div className="
          2xl:w-[20%] 
          sm:w-[100%] sm:bg-red-100 sm:mt-[20px]
          h-[10%]  border-2 border-black">ad</div>
          <div
            className="flex flex-wrap  


            2xl:w-[80%] 2xl:h-[100%] 2xl:mt-[40px]
            xl:w-[80%] xl:h-[700px]  xl:mt-[40px]
            lg:w-[80%] lg:h-[700px]  lg:mt-[40px]
            md:w-[80%] md:h-[700px] md:mt-[0px]
            sm:w-[100%] sm:h-[72%] sm:mt-[60px]
            justify-center mx-auto "
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductResult;
