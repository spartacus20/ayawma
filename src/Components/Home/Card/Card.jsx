import React from 'react'
import "./card.css"
import Rating from '@mui/material/Rating';
import im1 from '../../../Images/laptop.png'
function Card({stars, text}) {
  return (

    <div className='Card'>
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