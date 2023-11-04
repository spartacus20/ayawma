import React, { useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { BiFilterAlt } from "react-icons/bi";
import { actionTypes } from "../../../reducer.js";
import { useStateValue } from "../../../StateProvider";
import "./categories";

function Sort({ totalProducts }) {
    const [{ productSidebar }, dispatch] = useStateValue();
    const [Sort, setSort] = useState("ALL");

    const handleSort = (fil) => {
        dispatch({ type: actionTypes.SET_FILTER, filter: fil });
    }

    const toggleSidebar = () => {
        dispatch({ type: actionTypes.SET_PRODUCT_SIDEBAR });
    }

    const ChangeView = () => {
        dispatch({ type: actionTypes.CHANGE_GRID_VIEW });
    }

    
    const handleSortChange = (e) => {
        const selectedValue = e.target.value;
        setSort(selectedValue);
        handleSort(selectedValue);
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
                <label htmlFor="sort" className='capitalize'>Sort by</label>
                <select name="sort" id="sort" value={Sort} className='capitalize cursor-pointer' onChange={handleSortChange}>
                    <option value="LOWEST">Price (Lowest)</option>
                    <option value="HIGHEST">Price (Highest)</option>
                    <option value="A_TO_Z">Name (A - Z)</option>
                    <option value="Z_TO_A">Name (Z - A)</option>
                </select>
            </form>
        </div>
    );
}

export default Sort;
