import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from '../../Services/axios';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import Cookies from "universal-cookie";


function Success() {

    const cookie = new Cookies() ;
    const token = cookie.get("jid");
    const { id } = useParams();
    const [{ basket }, dispatch] = useStateValue();
    const [data, setData] = useState({}) // initialize data with an empty object

    const handleSubmit = () => {
        axios.post("/set-order", {
            order_id: id,
            basket,
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log(response)
                dispatch({ type: actionTypes.EMPTY_BASKET, basket: [] })
            })
            .catch((error) => { console.log(error) })
    }

    useEffect(() => {
        handleSubmit();
    }, [])

    return (
        <div className='mb-[150px] mt-[150px]'>
            <div className="bg-white p-6  md:mx-auto">
                <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                    <path fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                    </path>
                </svg>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
                    <h2 className='mt-4 mb-5 text-xl font-bold'>Order: {id}</h2>
                    <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
                    <p className="text-gray-600 my-2">We will send you an email with the receipt to this email address.</p>
                    <p className='text-gray-800 my-2'>{data.email}</p>
                    <p> Have a great day!  </p>
                    <div className="py-10 text-center">
                        <a href="/" className=" mx-auto xl:w-[300px] sm:w-[50%] px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3" >
                            GO BACK
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Success;
