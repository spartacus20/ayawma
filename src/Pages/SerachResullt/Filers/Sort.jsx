import React, { useState } from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { BiFilterAlt } from "react-icons/bi"
import { actionTypes } from "../../../reducer.js";
import { useStateValue } from "../../../StateProvider"
import "./categories"
function Sort({ totalProducts }) {

    const [{ productSidebar }, dispatch] = useStateValue();
    

    const toggleSidebar = () => {
        dispatch({ type: actionTypes.SET_PRODUCT_SIDEBAR })
    }
    const [Sort, setSort] = useState("price-lowest")
    const ChangeView = () => { 
        dispatch({ type: actionTypes.CHANGE_GRID_VIEW } )
    }
    return (



        <div className='flex justify-between items-center mb-8'>
            <div className='flex space-x-2'>
                <button className='border-2 border-black rounded-md p-1 inline-block xl:hidden sm:flex' onClick={toggleSidebar}>
                    <BiFilterAlt />
                </button>
                <button className='border-2 border-black rounded-md p-1 inline-block' onClick={ChangeView}>
                    <BsFillGridFill />
                </button>
                <button className='border-2 border-black rounded-md p-1 inline-block' onClick={ChangeView}>
                    <BsList />
                </button>
            </div>
            <p className='text-sm inline-block capitalize sm:ml-[15px]'>{totalProducts} products found</p>
            <div className='h-[1px] w-1/2 bg-gray-500 sm:hidden xl:flex'></div>
            <form className='ml-4'>
                <label htmlFor="sort" className='capitalize'>sort by</label>
                <select name="sort" id="sort" value={Sort} className='capitalize cursor-pointer' onChange={(e) => setSort(e.target.value)}>
                    <option value="price-lowest">price (lowest)</option>
                    <option value="price-highest">price (highest)</option>
                    <option value="name-a">name (a - z)</option>
                    <option value="name-z">name (z - a)</option>
                </select>
            </form>
        </div>
    )
}

export default Sort