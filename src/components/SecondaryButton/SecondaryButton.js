import React from 'react';
import './SecondaryButton.scss';
import { Link } from 'react-router-dom';

function SecondaryButton({link, isLnkt, icon, text, iconOption, bntId }){
    return isLnkt?(
        <Link className='secondary-button' to={link}>
            <img src={icon} alt="Button icon" className={`secondary-button__icon brainflix_icon_lg ${iconOption}`} />
            <p className='secondary-button__text'>{text}</p>
        </Link>
    ):(
        <button className='secondary-button' id={bntId}>
            <img src={icon} alt="Button icon" className={`secondary-button__icon brainflix_icon_lg ${iconOption}`} />
            <p className='secondary-button__text'>{text}</p>
        </button>
    );
}

export default SecondaryButton;