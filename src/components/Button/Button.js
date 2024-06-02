import React from 'react';
import './Button.scss';

function Button(prop){
    return(
        <button className='primary-button'>
            <img src={prop.icon} alt="Button icon" className='primary-button__icon' />
            <p className='primary-button__text'>{prop.text}</p>
        </button>
    );
}

export default Button;