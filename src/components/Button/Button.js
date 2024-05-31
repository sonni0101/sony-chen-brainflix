import React from 'react';
import './Button.scss';

function Button({icon, text}){
    return(
        <button className='primary-button'>
            <img src={icon} alt="Button icon" className='primary-button__icon' />
            {text}
        </button>
    );
}

export default Button;