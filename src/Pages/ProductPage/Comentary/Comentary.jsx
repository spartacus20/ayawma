import React from 'react'
import { Rating } from '@mui/material'
import "./comentary.css"
function Comentary({name, date, rating, text}) {
  return (
    <div className='Comentary'>
      <span className='ComentaryText'>{name}, {date}</span>
      <div className='RatingComentary'><Rating name="read-only" value={rating} size="small" readOnly /></div>
      <p>{text}</p>
    </div>
  )
}

export default Comentary