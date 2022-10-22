import React from 'react'
import "./card.css"
import { useNavigate } from 'react-router-dom'
import im1 from "../../Images/monitor.png"
import Rating from '@mui/material/Rating';
function Card({stars, text}) {
  
  let link = "/"+text.replaceAll(" ", "-")
  const navigate = useNavigate(); 

  const handleRedirect = () => {
     navigate(link); 
  }

  return (
    <div className='Card' onClick={handleRedirect}>
        <div className='CardIMG'>
            <img src={im1} alt="" />
        </div>
        <div className='CardTitle'>
            <p>{text}</p>
        </div>
        <div className='CardPrice'>
            <span >25,87 €</span>
        </div>
        <div className={stars? "CardStars":"hidden"}>
          <Rating name="read-only" value={5} size="small" readOnly />  
          <span className='CardReviews'>(10,270)</span>
        </div>
    </div>
  )
}

export default Card