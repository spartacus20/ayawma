import React, { useEffect, useState } from 'react'
import axios from '../../Services/axios'
import { toast } from 'react-toastify'
import Cookies from "universal-cookie";


function Orders() {

    const cookie = new Cookies();
    const userToken = cookie.get("jid");
    const [data, setData] = useState({})
    

    useEffect( () => {
        const fetchData = async () => {
           
            axios.post("/api/user/get/orders", {
                headers: {
                    "Authorization": `Bearer ${userToken}`,
                }
            }).then((res) => {
                setData(res.data)
                console.log(res.data)
            }).catch((err) => {
                toast.err("Something went wrong")
            })
        }
        fetchData();
    }, [])



  return (
    <div className='mt-[150px] mb-[150px] px-24'>
          <h1 className='text-3xl font-semibold mb-14 mt-10'>Your Orders</h1>
          <div className='mt-5 w-full min-h-[300px] bg-[#F9FAFB]'>
            <h2>Ordes ID:  </h2>
          </div>


    </div>
  )
}

export default Orders