import React from 'react'
import "./card.css"
import { useNavigate } from 'react-router-dom'
import im1 from "../../Images/monitor.png"
import Rating from '@mui/material/Rating';
function Card({stars, text, img, price, id, log}) {
  
  let fprice = price || 25.87
  // console.log(img)
  const isJson = (str) => {
    try {
      JSON.parse(str); // JSON
      return  true; 
    }catch(err) {
      return false;
    }
  }

  let image;
  if(isJson(img)) {
    image = JSON.parse(img)
  }else{
    image = img;
  }

 
  console.log(image)

  let link = "/"+id+"/"+text?.replaceAll(" ", "-").replaceAll("/", "-").toLowerCase()
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
        {stars && (
        <div className='CardStars'>
          <Rating name='read-only' value={stars} precision={0.5} size='small' readOnly />
          <span className='CardReviews'>(10,270)</span>
        </div>
      )}
    </div>
  )
}

export default Card