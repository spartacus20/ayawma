import React from 'react'
import { BiFilterAlt} from "react-icons/bi"
import Cookies from 'universal-cookie'

function LateralTable() {

  const cookie = new Cookies()
  const handleLogOut = () => {
    cookie.remove("jid", {
      path: "/",
    });
    window.href = "/"
  };

  return (
    <div className='xl:w-[20%] xl:mt-[150px] xl:pl-20 xl:pr-5 xl:border-r-2 xl:border-black sm:border-r-0 sm:w-[90%] sm:flex-wrap sm:pl-4'>
        <ul className='sm:flex xl:flex-col'>
            <li className='xl:hidden sm:flex items-center border-2 border-black rounded-lg px-1 h-[35px] '><BiFilterAlt size={18}/></li>
            <li className='mb-3 w-full px-3 py-1 hover:bg-gray-200 text-gray-600'>Settings</li>
            <li className='mb-3 w-full px-3 py-1 hover:bg-gray-200  text-gray-600'>Favourites</li>
            <li className='mb-3 w-full px-3 py-1 hover:bg-gray-200  text-gray-600'>Opinions</li>
            <li className='mb-5 w-full px-3 py-1 hover:bg-gray-200  text-gray-600 sm:hidden xl:flex'>Orders, billings</li>
            <li className='mb-5 w-full px-3 py-1 hover:bg-gray-200  text-gray-600 sm:flex xl:hidden'>Orders</li>
            <li className='w-full px-3 py-1 hover:bg-gray-200 text-red-500 sm:hidden xl:flex' ><div onClick={handleLogOut}>Log out</div></li>
        </ul>


    </div>
  )
}

export default LateralTable