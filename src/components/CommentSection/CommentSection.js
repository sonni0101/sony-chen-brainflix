import React from "react";
import './CommentSection.scss';
import Comment from "../Comment/Comment";
import InputField from "../Textarea/Textarea";
import ProfilePic from "../ProfilePic/profile_pic";
import ProfilePicImage from '../../assets/images/Mohan-muruge.jpg';
import Button from "../Button/Button";
import add from '../../assets/icons/add_comment.svg';


function CommentSection(){
    return(
        <section className="comment-section">
            <div className="comment-section__wrapper">
                <p className="comment-section__comment-count">3 Comments</p>
                <div className="comment-section__add-comment-wrapper">
                    <ProfilePic image={ProfilePicImage} />
                    <div className="comment-section__add-comment">
                        <InputField />
                        <Button icon={add} text="comment" />
                    </div>
                </div>
            </div>
            <Comment />
        </section>
    );
}

export default CommentSection;