import React from 'react';
import './Header.scss';
import Logo from '../Logo/Logo.js';
import SearchBar from '../SearchBar/SearchBar.js';

function Header() {
    return (
        <header className="header">
            <Logo />
            <SearchBar />
        </header>
    );
}

export default Header;




