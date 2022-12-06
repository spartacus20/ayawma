import React from 'react'

function Dashboard() {
    return (
        <div className='px-20 mx-auto w-[80%] mt-[150px] '>
            <h1 className='text-xl font-semibold mb-7'>Dashboard</h1>
            <form className='flex flex-col'>
                <label htmlFor="" className='mb-2'>Name: </label>
                <input type="text" name="" id="" className='border-2 mb-3 w-[250px]' />
                <label htmlFor="" className='mb-2'>Description: </label>
                <input type="text" name="" id="" className='border-2 mb-3 w-[250px]'/>
                <label htmlFor="">Price</label>
                <input type="text" className='border-2 w-[100px] mb-7'/>
                <input type="file" className='mb-8'/>

                <button className='bg-orange-300 w-[150px] h-[40px] rounded-xl'>Submit</button>

            </form>




        </div>
    )
}

export default Dashboard