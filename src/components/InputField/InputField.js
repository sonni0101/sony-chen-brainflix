import React from "react";
import './InputField.scss';

function InputField({text, label, value, onChange}){

    return(
        <div className="input">
            <label className="input__label">{text}</label>
            <input 
            className="input__textarea" 
            placeholder={label} 
            type="text" 
            name="Input"
            value={value}
            onChange={onChange}
            />
        </div>
    );
}

export default InputField;