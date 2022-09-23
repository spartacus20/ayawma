import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import im1 from "../../Images/image 14.png";
function ShoppingCart() {
  return (
    <>
        <Navbar/>
        <div className="w-full min-h-[600px] flex justify-center mt-[100px]">
            <div className='w-[80%]  min-h-[600px]'>
                <div className='font-semibold  w-[20%] mb-[30px]'><h3 className='text-[25px] text-[#333333]'>Shop cart</h3></div>
                <div className='h-[80%]'>
                    <div className='hidden mx-auto h-[40px] mt-[50px] '><span className='text-[#808080] text-[16px]'>No product found in shop cart</span></div>
                    
                    {/* Shopping card container */}
                     <div className='w-full h-[200px] border-2 border-black'>
                        <div className='w-[200px] h-[100%] border-2 border-black'>
                            <img src={im1} alt="" className='w-[100%] h-[100%] ' />
                        </div>
                     </div>

                    <hr />  
                
                
                
                </div>
            </div>
            
        </div>
    
    </>
  )
}

export default ShoppingCart