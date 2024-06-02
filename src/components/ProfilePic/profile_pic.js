import React from "react";
import './profile_pic.scss';

function ProfilePic(prop){
    return(
        <div className={`profile-pic ${prop.className}`}>
            <img src={prop.image} alt="User profile image" className="profile-pic__image" />
        </div>
    );
}

export default ProfilePic;