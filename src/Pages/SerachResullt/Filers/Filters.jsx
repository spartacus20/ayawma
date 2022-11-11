import React, { useState } from 'react'
import { CATEGORIES} from "./categories"
import { actionTypes } from "../../../reducer.js";
import { useStateValue } from "../../../StateProvider"
function Filters() {

    const [{ productSidebar }, dispatch] = useStateValue();
    const [categorie, setCategorie] = useState("all")
    const maxPrice = 100.99
    const minPrice = 0.99
    const [price, setPrice] = useState(maxPrice)
    
    const toggleSidebar = () => {
        dispatch({ type: actionTypes.SET_PRODUCT_SIDEBAR })
    }
    const handleClick = (e) => {
        setPrice(maxPrice)
        setCategorie('all');

    }

    return (
        <>
            <div className={`xl:sticky top-0 w-[200px] xl:bg-white sm:absolute sm:bg-black sm:h-[100vh] ${productSidebar ? 'sm:left-[-30px]' : 'sm:left-[-5000px]'}`}>
                <div className="mb-6 sm:pl-3 sm:mt-10 sm:text-white xl:text-black">
                    <div className='mb-6 xl:hidden sm:flex' onClick={toggleSidebar} >
                        X
                    </div>
                    <h4 className="mb-1 font-bold capitalize text-lg">company</h4>
                    {CATEGORIES.map((c, index) => {
                        return (
                            <button
                                key={index}
                                type="button"
                                name="category"
                                onClick={(e) => setCategorie(e.target.textContent)}
                                // className="block py-1 capitalize text-gray-600"
                                className={`block py-1 capitalize xl:text-gray-600  sm:text-white ${categorie === c ? 'border-b-2 border-blue-600' : ''}`}
                            >
                                {c}
                            </button>
                        );
                    })}
                </div>
                <div className='mb-6 sm:pl-3'>
                    <h4 className="mb-1 font-bold capitalize text-lg  sm:text-white  xl:text-black">price</h4>
                    <p className="italic  sm:text-white  xl:text-gray-600">{price + " €"}</p>
                    <input
                        type="range"
                        name="price"
                        id="price"
                        onChange={(e) => setPrice(e.target.value)}
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        className="form-range"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleClick}
                    className="xl:bg-black text-white px-2 py-1 rounded-md font-semibold shadow-md sm:ml-3 sm:bg-blue-600"
                >
                    Clear Filters
                </button>

            </div>
        </>
    )
}

export default Filters