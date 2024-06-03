import React from "react";
import './ProfilePic.scss';

function ProfilePic(prop){
    return(
        <div className={`profile-pic ${prop.className}`}>
            <img src={prop.image} alt="User profile image" className={`profile-pic__image ${prop.profileImageOption}`} />
        </div>
    );
}

export default ProfilePic;