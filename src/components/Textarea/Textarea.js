import React from "react";
import './Textarea.scss';

function Textarea(){
    return(
        <form className="comment-textarea">
            <label className="comment-textarea__label">Join the conversation</label>
            <textarea className="comment-textarea__textarea" placeholder="Add new comment" type="text" name="Comment" rows="1"></textarea>
        </form>
    );
}

export default Textarea;