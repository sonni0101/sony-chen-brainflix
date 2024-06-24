import React from 'react';
import './PrimaryButton.scss';
import { Link } from 'react-router-dom';

function PrimaryButton({link, isLink, icon, text, iconOption, bntId, maxWidth }){
    return isLink?(
        <Link className={`primary-button ${maxWidth}`} to={link}>
            <img src={icon} alt="Button icon" className={`primary-button__icon brainflix_icon_button ${iconOption}`}  />
            <p className='primary-button__text'>{text}</p>
        </Link>
    ): (
        <button className={`primary-button ${maxWidth}`} id={bntId}>
            <img src={icon} alt="Button icon" className={`primary-button__icon brainflix_icon_button ${iconOption}`}  />
            <p className='primary-button__text'>{text}</p>
        </button>
    );
}

export default PrimaryButton;