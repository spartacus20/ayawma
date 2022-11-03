import React, { useState, useEffect } from 'react'
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import { Rating } from '@mui/material'
import { Authentication } from '../../../Services/Authentication'
import Comentary from '../Comentary/Comentary'
import "./reviews.css"
import axios from '../../../Services/axios';
import { data } from 'autoprefixer';
function Reviews({ productID }) {

    const cookie = new Cookies();
    const [limitAmount, setLimitAmount] = useState(0)
    const [value, setValue] = useState(0);
    const [allComments, setAllComments] = useState([])
    const [allRating, setAllRating] = useState(0); 
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

    const updateComments = async () => {
       
        const response = await axios.post('/rating', { productID: productID })

        data = response.data.data

        //console.log(data.length)
        
        let totalRating = 0
        data.map((comment, index) => {
            totalRating += comment.rating
            return (<Comentary name={comment.name} date={comment.comment_data} rating={comment.rating} text={comment.comment} key={index}/>)
        }) 

        if(data.length != 0){
            setAllRating(totalRating / data.length)
        }else{
            setAllRating(0)
        }
        setAllComments(data)
       
    }

    const stars = (change) => {
        var value = change.target.value
        setRating({ comment: rating.comment, rating: parseInt(value) })
        setValue(parseInt(value))
    }

    useEffect(() => {
        updateComments();
    }, [productID])

    const handleSubmit = async () => {

        let user = await Authentication();

        if (user === undefined) {
            toast.error("You have to be logged in")
            return;
        }
        if(value === 0){
            toast.error("You must to put stars")
            return;
        }
        if (rating.comment.length <= 15) {
            toast.error("The text have to be at least 15 characters")
            return;
        }

        const refreshToken = cookie.get("jid")
      
        if (refreshToken) {
            try {
                console.log("entre aqui")
                const response = await axios.post("/new-rating", {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                    },
                    productID: productID,
                    comment: {
                        rating: rating.rating,
                        comment: rating.comment,
                    }
                });
                console.log(response)
            } catch (e) {
                console.log(e)
                return null;
            }
    


        updateComments();
    

        setRating({ comment: "", rating: 0 });
        document.querySelector("#comment-input").value = ""
        setValue(0);
        setLimitAmount(0);

        }
    }

    return (
        <div className='Reviews'>
            <h2>Customer reviews:</h2>
            <div className='Reviews-number'>
                <span className='rating-text'>{allRating.toFixed(1)}</span>
                <Rating name="read-only" value={allRating} precision={0.5} size="small" readOnly />
                <p>{allComments.length} reviews</p>
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
            { data.length === 0
            ? 
            <h3></h3>
            : allComments.map((comment, index) => (
                <Comentary name={comment.name} date={comment.comment_data} rating={comment.rating} text={comment.comment} key={index    }/>
            ))
            }

        </div>
    )
}

export default Reviews