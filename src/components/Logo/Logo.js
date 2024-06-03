import React from 'react';
import './Logo.scss';
import BrainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';

function Logo(){
    return(
        <a className='Bandflix-logo'>  
            <img src={BrainFlixLogo} alt="Logo image" className='Bandflix-logo__logo' />
        </a>
    );
}

export default Logo;

