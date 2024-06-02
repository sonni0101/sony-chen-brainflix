import React from "react";
import './Comment.scss';
import ProfilePic from "../ProfilePic/profile_pic";

function Comment(){
    return(
        <section className="comment">
            <ProfilePic
            className="comment__profile-no-image"
              />
            <div className="comment__wrapper">
                <div className="comment__upper-section">
                    <p className="comment__name">Name</p>
                    <p className="comment__time">Time</p>
                </div>
                <p className="comment__text">Comment goes here</p>
            </div>
        </section>
    );
}

export default Comment;