import React from "react";
import './InputField.scss';

function InputField(prop) {
    return (
        <div className={"input"}>
            <label className="input__label">{prop.text}</label>
            <input 
                className={`input__field ${prop.formError} ${prop.fieldHeight}`}
                placeholder={prop.label} 
                type="text" 
                name="Input" 
                value={prop.value}
                onChange={prop.onChange}
            />
        </div>
    );
}

export default InputField;