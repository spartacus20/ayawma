import React, { useState } from 'react'
import { toast } from "react-toastify";
import { Rating } from '@mui/material'
import { Authentication } from '../../../Services/Authentication'
import Comentary from '../Comentary/Comentary'
import "./reviews.css"
function Reviews() {

    const [limitAmount, setLimitAmount] = useState(0)
    const [value, setValue] = useState(0);
    const [rating, setRating] = useState({ comment: "", rating: 0 })
    const [colorComment, setColorComment] = useState('text-secondary')
    const commentChanges = (change) => {
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
        setRating({ comment: value, rating: rating.rating });
        setLimitAmount(value.length)

    }
    const stars = (change) => {
        var value = change.target.value
        setRating({ comment: rating.comment, rating: parseInt(value)})
        setValue(parseInt(value))
    }

    const handleSubmit =  async () => {
        let user = await Authentication(); 

        if(user === undefined){
            toast.error("You have to be logged in")
            return; 
        }
        if(rating.comment.length <= 15){
            toast.error("The text have to be at least 15 characters")
            return;  
        }
        


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
                <textarea className="form-control" id="comment-input" maxLength="200" onChange={commentChanges} />
                <div className={`ml-auto 2xl:mr-[110px] xl:mr-[80px] sm:mr-[40px] ${colorComment}`}>{limitAmount} / 200</div>
                <button onClick={handleSubmit}>Submit</button>
                <div className='Rating'>
                        <Rating value={value} size="small" onChange={stars} />
                </div>
            </div>
            <Comentary />
            <Comentary />

        </div>
    )
}

export default Reviews