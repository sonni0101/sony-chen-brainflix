import React from "react";
import './Comment.scss';
import ProfilePic from "../ProfilePic/ProfilePic";
import { formatTime } from '../../utils/formatTime';
import DeleteButton from "../DeleteButton/DeleteButton";

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
                    <div className="comment__time-wrapper">
                        <p className="comment__time">{formatTime(prop.commentDate)}</p>
                        <DeleteButton onClick={prop.onClick} />
                    </div>
                </div>
                <p className="comment__text">{prop.comment}</p>
            </div>
        </section>
    );
}

export default Comment;