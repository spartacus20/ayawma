import React from 'react'
import { Rating } from '@mui/material'
import "./comentary.css"
function Comentary() {
  return (
    <div className='Comentary'>
      <span className='ComentaryText'>Jorge, 13 May 2022</span>
      <div className='RatingComentary'><Rating name="read-only" value={5} size="small" readOnly /></div>
      <p>asdasdjsabdkjhasbdiiiiiibsabiuassssssiuuiasnljokajsndjunasdinwaipdbawipbdqwaipdpiwuabdipabdipabdipabwdpibpdifbnaijfbwiejabfikjabdnfkjaosndokjasndojsandikjsandijnadjwndujnadunaipufbpaubfiupawbdiujpwab</p>
    </div>
  )
}

export default Comentary