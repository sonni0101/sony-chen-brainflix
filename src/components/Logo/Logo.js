import React from 'react';
import './Logo.scss';
import BrainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';

function Logo(){
    return(
        <a>  
            <img src={BrainFlixLogo} alt="Logo image" className='Bandflix-logo' />
        </a>
    );
}

export default Logo;

