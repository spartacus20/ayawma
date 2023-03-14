import React from 'react'
import "./card.css"
import { useNavigate } from 'react-router-dom'
import im1 from "../../Images/monitor.png"
import Rating from '@mui/material/Rating';
function Card({stars, text, img, price, id}) {
  
  let fprice = price || 25.87
  let image = JSON.parse(img) 

  let link = "/"+id+"/"+text.replaceAll(" ", "-").toLowerCase()
  const navigate = useNavigate(); 

  const handleRedirect = () => {
     navigate(link); 
  }

  return (
    <div className='Card' onClick={handleRedirect}>
        <div className='CardIMG'>
            <img src={image && image[0].url} alt={text} />
        </div>
        <div className='CardTitle'>
            <p>{text}</p>
        </div>
        <div className='CardPrice'>
            <span >{fprice} €</span>
        </div>
        <div className={stars? "CardStars":"hidden"}>
          <Rating name="read-only" value={5} size="small" readOnly />  
          <span className='CardReviews'>(10,270)</span>
        </div>
    </div>
  )
}

export default Card