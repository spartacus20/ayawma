import React, {useState} from 'react'
import { Rating } from '@mui/material'
import Comentary from '../Comentary/Comentary'
import "./reviews.css"
function Reviews() {

    const [limitAmount, setLimitAmount] = useState(0)
    const [colorComment, setColorComment] = useState('text-secondary')

    const  commentChanges = (change) => {
		var value = change.target.value

		if (value.length > 100) {
			setColorComment('text-warning')
		} 
        if (value.length < 100) {
            setColorComment('text-secondary')
        }
		if (value.length === 200) {
			setColorComment('text-danger')
		}
		setLimitAmount(value.length)
	
    }

  return (
    <div className='Reviews'>
        <h2>Customer reviews:</h2>
        <div className='Reviews-number'>
            <span className='rating-text'>5.0</span>
            <Rating name="read-only" value={5} size="small" readOnly />  
            <p>2 reviews</p>
        </div>
        <div className='Review-text'>
            <h3>Give us your opinion</h3>
            <span className='text'>Message</span>
            <textarea className="form-control" id="comment-input" maxLength="200" onChange={commentChanges}></textarea>
            <div className={`ml-auto 2xl:mr-[110px] xl:mr-[80px] sm:mr-[40px] ${colorComment}`}>{limitAmount} / 200</div>
            <button>Submit</button>
            <div className='Rating'>
                <Rating name="read-only" value={0} size="small"  />  
            </div>
        </div>  
            <Comentary/>
            <Comentary/>

    </div>
  )
}

export default Reviews