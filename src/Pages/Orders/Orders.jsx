import React, { useEffect, useState } from 'react'
import axios from '../../Services/axios'
import { toast } from 'react-toastify'
import Cookies from "universal-cookie";


function Orders() {

    const cookie = new Cookies();
    const userToken = cookie.get("jid");
    const [data, setData] = useState([{}])
    const [order_information, setOrder_information] = useState([{}])
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await axios.post("/api/user/get/orders", {
                    headers: {
                        "Authorization": `Bearer ${userToken}`,
                    },
                });
                setData(res.data.data)
                setOrder_information(res.data.order_information)
                setIsLoading(false)
                console.log(res.data)
                console.log(res.data.order_information)
            } catch (err) {
                toast.error("Something went wrong")
            }
        }
        fetchData();
    }, [])



    return (
        <div className='mt-[150px] mb-[150px] xl:px-24 sm:px-8'>
            <h1 className='text-3xl font-semibold mb-14 mt-10'>Your Orders</h1>
            {
                isLoading ?
                    (
                        <div className="flex justify-center items-center h-64">
                            <svg
                                className="animate-spin -ml-1 mr-3 h-10 w-10 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16v3a5 5 0 015 5h3zm-8 8a8 8 0 008-8v-3a5 5 0 00-5-5H4v16h8z"
                                ></path>
                            </svg>
                            <span>Loading...</span>
                        </div>
                    ) : (
                        <div className='flex flex-col'>
                            {
                                data?.map((item, index) => {

                                    let total = 0;
                                    let products = JSON.parse(item.products)
                                    let shipping = JSON.parse(item.shipping_address)



                                    return (
                                        <div className='mt-5 w-full min-h-[300px] bg-[#F9FAFB] px-4 py-5 flex flex-col mb-10 shadow-lg' key={index}>
                                            <span className='text-lg font-semibold mb-4'>Order ID: <span className='text-[#c7a87d]'>{item.order_id} </span></span>
                                            <span className='text-lg font-semibold mb-4'>Payment by: <span className='text-[#c7a87d]'> Card</span></span>
                                            <div className='flex flex-col'>
                                                <span className='text-lg font-semibold mb-4'>Delivery: </span>
                                                <span>{shipping.name}</span>
                                                <span>{shipping.address.line1}, </span>
                                                <span>{shipping.address.line2}, </span>
                                                <span>{shipping.address.city}, </span>
                                                <span>{shipping.address.postal_code}, </span>
                                                <span>{shipping.address.country} </span>
                                            </div>

                                            {
                                                products.map((product, indice) => {

                                                    let images = JSON.parse(product.images)
                                                    // console.log(product.price * product.quantity)
                                                    total = total + (product.price * product.quantity)
                                                    // console.log("Total "+indice+": "+total)
                                                    // console.log(images)
                                                    return (
                                                        <div className='w-full px-10 flex items-center xl:justify-between mt-3 xl:flex-row sm:flex-col sm:justify-center ' key={indice}>

                                                            <img src={images[0].url} alt="" className='w-[150px]' />
                                                            <span className='sm:mt-3 sm:text-center'>{product.title} </span>
                                                            <span className='mt-3'>{product.price} €</span>
                                                            <span className='mt-3 mb-3'>{product.quantity}</span>
                                                            <span>{(product.price * product.quantity).toFixed(2)} €</span>


                                                        </div>
                                                    )
                                                })
                                            }
                                            <span className='text-lg font-semibold mb-4 xl:mt-10'>Total: <span className='font-bold'> {total.toFixed(2)}  €</span></span>

                                        </div>
                                    )
                                })
                            }

                        </div>

                    )
            }





        </div>
    )
}

export default Orders