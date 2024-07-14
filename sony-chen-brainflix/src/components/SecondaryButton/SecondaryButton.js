import React from 'react';
import './SecondaryButton.scss';
import { Link } from 'react-router-dom';

function SecondaryButton({link, isLink, icon, text, iconOption, bntId, maxWidth }){
    return isLink?(
        <Link className={`secondary-button ${maxWidth}`} to={link}>
            <img src={icon} alt="Button icon" className={`secondary-button__icon brainflix_icon_button ${iconOption}`} />
            <p className='secondary-button__text'>{text}</p>
        </Link>
    ):(
        <button className={`secondary-button ${maxWidth}`} id={bntId}>
            <img src={icon} alt="Button icon" className={`secondary-button__icon brainflix_icon_button ${iconOption}`} />
            <p className='secondary-button__text'>{text}</p>
        </button>
    );
}

export default SecondaryButton;