import React from "react";
import './Comment.scss';
import ProfilePic from "../ProfilePic/ProfilePic";
import { formatTime } from '../../utils/formatTime';

function Comment(prop){
    return(
        <section className="comment">
            <ProfilePic
            className="comment__profile-no-image"
            profileImageOption="profile-image-none"
              />
            <div className="comment__wrapper">
                <div className="comment__upper-section">
                    <h3 className="comment__name">{prop.commemtor}</h3>
                    <p className="comment__time">{formatTime(prop.commentDate)}</p>
                </div>
                <p className="comment__text">{prop.comment}</p>
            </div>
        </section>
    );
}

export default Comment;