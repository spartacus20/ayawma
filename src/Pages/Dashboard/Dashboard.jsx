import axios from 'axios';
import React, { useState } from 'react'

function Dashboard() {
    
    const [name, setName] = useState(''); 
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    
    const handleFileSelect = (event) => {
        setImage(event.target.files[0])
    }


    const handleSubmit = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append('file', image);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        const response = await axios.post("http://localhost:3001/product/add", formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(response);
        const iName = document.getElementById("name");
        const iDescription = document.getElementById("description");
        const iPrice = document.getElementById("price");
        const iFile = document.getElementById("file");
        iName.value = "";
        iDescription.value = "";
        iPrice.value = "";
        iFile.value = "";
    }
   
    return (
        <div className='px-20 mx-auto w-[80%] mt-[150px] '>
            <h1 className='text-xl font-semibold mb-7'>Dashboard</h1>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor="" className='mb-2'>Name: </label>
                <input type="text" name="" id="name" className='border-2 mb-3 w-[250px]'  onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="" className='mb-2'>Description: </label>
                <textarea type="text" name="" id="description" className='border-2 mb-3 w-[250px] h-[150px]' onChange={(e) => setDescription(e.target.value) }/>
                <label htmlFor="">Price</label>
                <input type="text" id='price' className='border-2 w-[100px] mb-7' onChange={(e) => setPrice(e.target.value)}/>
                <input type="file" id='file' className='mb-8' onChange={handleFileSelect}/>

                <button className='bg-orange-300 w-[150px] h-[40px] rounded-xl'>Submit</button>

            </form>




        </div>
    )
}

export default Dashboard