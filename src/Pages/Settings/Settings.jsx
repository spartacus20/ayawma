import React from 'react'
import {BsPencilFill} from "react-icons/bs"

function Settings() {
    return (


        <div className='mt-[150px] w-[80%] mx-auto px-24'>
            <div>
                <div className='mb-8 flex items-center jus'>
                    <span>Account name</span>
                    <div className='mx-auto flex items-center justify-center'>
                       <span className='mr-3'>Admin </span>
                       <div className='flex items-center border-2 border-black rounded-lg px-5 h-[38px] w-[89px] cursor-pointer'>
                            <BsPencilFill/>
                            <span className='ml-2'>Edit</span> 
                       </div>
                    </div>
                </div>
                <div className='mb-8 flex items-center '>
                    <span className='mr-16'>Email</span>
                    <div className='mx-auto flex items-center w-[200px]'>
                       <span className='mr-3'>test@example.com</span>
                       <div className='flex items-center border-2 border-black rounded-lg px-5 h-[38px] w-[89px] cursor-pointer'>
                            <BsPencilFill/>
                            <span className='ml-2'>Edit</span> 
                       </div>
                    </div>
                </div>
                <button>Save change</button>
            </div>


        </div>


    )
}

export default Settings