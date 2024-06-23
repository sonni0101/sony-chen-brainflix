import React from 'react';
import './Logo.scss';
import BrainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';
import { Link } from 'react-router-dom';

function Logo(){
    return(
        <Link to="/" className='Bandflix-logo'>  
            <img src={BrainFlixLogo} alt="Logo image" className='Bandflix-logo__logo' />
        </Link>
    );
}

export default Logo;

