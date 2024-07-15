import React from "react";
import './Textarea.scss';

function Textarea({ text, label, fieldHeight, value, onChange, formError }) {
    return (
        <div className={"comment-textarea"}>
            <label className="comment-textarea__label">{text}</label>
            <textarea 
                className={`comment-textarea__textarea ${fieldHeight} ${formError}`} 
                placeholder={label} 
                type="text" 
                name="Comment" 
                rows="1"
                value={value}
                onChange={onChange}
            ></textarea>
        </div>
    );
}

export default Textarea;