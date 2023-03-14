import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../../Components/Card/card.css"
import im1 from "../../../Images/laptop.png"
import { HiChevronDoubleRight } from 'react-icons/hi';
function ProductList({ product }) {
    
    const BACKEND_URL = "http://localhost:3001/images/"+product.images; 
    // let images = product.images.split("}");
    let images = JSON.parse(product.images);
    // console.log(images[0].url)
    // console.log(images);
    let link = "/"+product.title.replaceAll(" ", "-")
    const navigate = useNavigate(); 
  
    const handleRedirect = () => {
       navigate(link); 
    }
  
  return (
    <div className="flex mb-8" onClick={handleRedirect}>
                <img
                    className="xl:w-[300px] xl:h-[200px] sm:w-[100px] h-[150] object-contain mb-4 rounded"
                    src={images[0].url}
                    alt=""
                />
                <div className="flex flex-col sm:ml-[5px]">
                    <h3 className="mb-2 text-lg font-semibold tracking-widest">{product.title}</h3>
                    <h4 className="mb-2 text-black italic font-semibold">
                        {product.price} €
                    </h4>
                    <p className="max-w-2xl mb-3 text-gray-500 ListCardDescription">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti harum numquam molestias voluptatibus minima maxime veritatis pariatur corporis provident, minus fugit velit modi nostrum repellat laboriosam magnam culpa. Sapiente, sint!
                    </p>
                    <div className="text-sm uppercase bg-yellow-500 text-black rounded-md font-bold py-1 px-2 ml-auto shadow-lg cursor-pointer">
                        Details
                        <span className="inline-block ml-1"><HiChevronDoubleRight /></span>
                    </div>
                </div>
            </div>
  )
  
}

export default ProductList