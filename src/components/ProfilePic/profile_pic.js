import React from "react";
import './profile_pic.scss';
import ProfilePicImage from '../../assets/images/Mohan-muruge.jpg';

function ProfilePic({className}){
    return(
        <div className={`profile-pic ${className}`}>
            <img src={ProfilePicImage} alt="User profile image" className="profile-pic__image" />
        </div>
    );
}

export default ProfilePic;