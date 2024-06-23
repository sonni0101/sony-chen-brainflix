import React from 'react';
import './PrimaryButton.scss';
import { Link } from 'react-router-dom';

function PrimaryButton({link, isLnkt, icon, text, iconOption, bntId }){
    return isLnkt?(
        <Link className='primary-button' to={link}>
            <img src={icon} alt="Button icon" className={`primary-button__icon brainflix_icon_lg ${iconOption}`}  />
            <p className='primary-button__text'>{text}</p>
        </Link>
    ): (
        <button className='primary-button' id={bntId}>
            <img src={icon} alt="Button icon" className={`primary-button__icon brainflix_icon_lg ${iconOption}`}  />
            <p className='primary-button__text'>{text}</p>
        </button>
    );
}

export default PrimaryButton;