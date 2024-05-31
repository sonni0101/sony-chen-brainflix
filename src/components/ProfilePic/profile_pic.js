import React from "react";
import './profile_pic.scss';
import ProfilePicImage from '../../assets/images/Mohan-muruge.jpg';

function ProfilePic(){
    return(
        <>
            <img src={ProfilePicImage} alt="User profile image" className="profile-pic" />
        </>
    );
}

export default ProfilePic;