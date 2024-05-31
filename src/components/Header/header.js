import React from 'react';
import './Header.scss';
import Logo from '../Logo/Logo.js';
import SearchBar from '../SearchBar/SearchBar.js';
import ProfilePic from '../ProfilePic/profile_pic.js';
import Button from '../Button/Button.js';

function Header() {
    return (
        <header className="header">
            <nav className="header__section-container">
                <Logo />
                <div className='header__right'>
                    <SearchBar />
                    <Button />
                    <ProfilePic />
                </div>
            </nav>
        </header>
    );
}

export default Header;




