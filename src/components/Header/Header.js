import React from 'react';
import './Header.scss';
import Logo from '../Logo/Logo.js';
import SearchBar from '../SearchBar/SearchBar.js';
import ProfilePic from '../ProfilePic/ProfilePic.js';
import PrimaryButton from '../PrimaryButton/PrimaryButton.js';
import ButtonIcon from '../../assets/icons/upload.svg';
import ProfilePicImage from '../../assets/images/Mohan-muruge.jpg';

function Header(prop) {
    return (
        <header className={`header ${prop.dividerOption}`}>
            <nav className="header__section-container">
                <Logo />
                <div className="header__right">
                    <div className="header__right--mobile">
                        <SearchBar />
                        <ProfilePic 
                        image={ProfilePicImage} 
                        className="header__profile-pic-mobile" 
                        />
                    </div>
                    <PrimaryButton icon={ButtonIcon} text="Upload" link={"/VideoUploadPage"}/>
                    <ProfilePic 
                    image={ProfilePicImage} 
                    className="header__profile-pic-desktop" 
                    />
                </div>
            </nav>
        </header>
    );
}

export default Header;




