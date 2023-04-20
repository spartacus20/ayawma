import React, { useState, useEffect } from 'react'
import { Authentication } from '../../Services/Authentication';
import axios from '../../Services/axios';


function Settings() {


    const [data, setData] = useState({})
    const [name, setName] = useState("")
    const [email, setEmail] = useState(""); 
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
        

    const handleSubmitPassword = () => {
         
    }


    useEffect(() => {
        const HTTP = async () => {
            let user = await Authentication()
            if (user === undefined) {
                window.location.href = "/"
                return;
            }
            setData(user.data[0])

        }

        HTTP();

    }, [])


    return (


        <div className='xl:w-[70%] sm:w-[90%] px-10 mx-auto  flex flex-col mb-[150px] mt-[150px] shadow-lg '>
            <h1 className='text-3xl font-semibold mb-14 mt-10'>Profile Settings</h1>
            <div className='flex flex-col xl:px-10  w-full  rounded-lg min-h-[300px]  '>
                <h2 className='text-xl font-bold mt-3'>General information</h2>
                <div className='flex xl:flex-row sm:flex-col '>
                    <div className='flex flex-col mt-6'>
                        <label htmlFor="CurrentPassword" >Name</label>
                        <input type="text" className='xl:w-80 sm:w-72 bg-[#F9FAFB] mt-2 rounded-md border-2 border-gray-300 h-[36px] pl-3' value={data.name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='flex flex-col mt-6 xl:ml-24 '>
                        <label htmlFor="CurrentPassword" >Email</label>
                        <input type="text" className='xl:w-80 sm:w-72 bg-[#F9FAFB] mt-2 rounded-md border-2 border-gray-300 h-[36px] pl-3' value={data.email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <button className='bg-[#1D4ED8] w-[150px] h-[40px] rounded-lg text-white font-semibold mt-14'>Save all</button>
            </div>
            <div className='flex flex-col xl:px-10  w-full  rounded-lg min-h-[300px]  '>
                <h2 className='text-xl font-bold mt-3'>Password information</h2>
                <div className='flex xl:flex-row sm:flex-col '>
                    <div className='flex flex-col mt-6'>
                        <label htmlFor="CurrentPassword" >Current password</label>
                        <input type="password" className='xl:w-80 sm:w-72 bg-[#F9FAFB] mt-2 rounded-md border-2 border-gray-300 h-[36px] pl-3' onChange={(e) => setCurrentPassword(e.target.value)}/>
                    </div>
                    <div className='flex flex-col mt-6 xl:ml-24 '>
                        <label htmlFor="CurrentPassword" >New password</label>
                        <input type="password" className='xl:w-80 sm:w-72 bg-[#F9FAFB] mt-2 rounded-md border-2 border-gray-300 h-[36px] pl-3' onChange={(e) => setNewPassword(e.target.value)}/>
                    </div>
                </div>
                <div className='flex flex-col mt-6'>
                    <label htmlFor="CurrentPassword" >Confirm password</label>
                    <input type="password" className='xl:w-80 sm:w-72 bg-[#F9FAFB] mt-2 rounded-md border-2 border-gray-300 h-[36px] pl-3' onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <div className='mt-6 mb-6'>
                    <h4 className='font-semibold'>Password requirements:</h4>
                    <p className='text-gray-400'>
                        Ensure that these requirements are met: <br />
                        At least 10 characters (and up to 100 characters)<br />
                        At least one lowercase character<br />
                        Inclusion of at least one special character, e.g., ! @ # ?<br />
                        Some text here zoltan<br />
                    </p>
                </div>
                <button className='bg-[#1D4ED8] w-[150px] h-[40px] rounded-lg text-white font-semibold mb-10'>Save all</button>
            </div>

        </div>



    )
}

export default Settings