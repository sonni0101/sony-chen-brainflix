import React from "react";
import './Comment.scss';
import ProfilePic from "../ProfilePic/profile_pic";

function Comment(prop){
    return(
        <section className="comment">
            <ProfilePic
            className="comment__profile-no-image"
            profileImageOption="profile-image-none"
              />
            <div className="comment__wrapper">
                <div className="comment__upper-section">
                    <p className="comment__name">{prop.commemtor}</p>
                    <p className="comment__time">{prop.commentDate}</p>
                </div>
                <p className="comment__text">{prop.comment}</p>
            </div>
        </section>
    );
}

export default Comment;