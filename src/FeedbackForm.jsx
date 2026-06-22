import { useState } from "react";

export const FeedbackForm = () => {

    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [msg, setMsg] = useState("");
    const [feedbacks, setFeedbacks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!msg.trim()) return;
        if(rating===0) return;
        if(!msg.trim()) return;
        setFeedbacks([
            ...feedbacks, 
            {name, rating, msg}
        ]);
        setName("");
        setRating(0);
        setMsg("");
    };

    return(
        <>
        <div id = "feedbackForm">
            <form onSubmit = {handleSubmit}>

                <h3>FEEDBACK FORM</h3>

                <label htmlFor = "name">Name: </label>
                <input name = "name" id = "name" type = "text" placeholder = "Name" value = {name} onChange = {(e) => setName(e.target.value)} />

                <br/>

                <div id = "rating">
                    <p>Rating: </p>
                    {
                        [1, 2, 3, 4, 5].map((star) => {return(
                            <i key = {star} className = {star<=rating ? "fa-solid fa-star" : "fa-regular fa-star"} onClick = {() => setRating(star)}></i>
                        )})
                    }
                </div>

                <br/>

                <label htmlFor = "msg">Message: </label><br/>
                <textarea  id = "msg" name = "msg" placeholder = "Enter feedback message." value = {msg} onChange = {(e) => setMsg(e.target.value)} />

                <br/>

                <button>Submit Feedback</button> 
            </form>
        </div>

        <div id = "feedbacks">
            {
                feedbacks.map((feedback, index) => {return(
                    <div className = "feedback" key = {index}>
                        <span>{feedback.name}</span>

                        <div id="ratingStar">
                            {[1,2,3,4,5].map((star) => (
                                <i key={star} className={star <= feedback.rating ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            ))}
                        </div>

                        <p>{feedback.msg}</p>
                    </div>
                )})
            }
        </div>
        </>
    );
};