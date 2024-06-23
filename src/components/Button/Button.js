import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

function Button(prop){
    return(
        <Link className='primary-button' to={prop.link}>
            <img src={prop.icon} alt="Button icon" className='primary-button__icon brainflix_icon_lg' />
            <p className='primary-button__text'>{prop.text}</p>
        </Link>
    );
}

export default Button;