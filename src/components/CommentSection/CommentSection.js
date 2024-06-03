import React from "react";
import './CommentSection.scss';
import Comment from "../Comment/Comment";
import InputField from "../Textarea/Textarea";
import ProfilePic from "../ProfilePic/profile_pic";
import ProfilePicImage from '../../assets/images/Mohan-muruge.jpg';
import Button from "../Button/Button";
import add from '../../assets/icons/add_comment.svg';

function CommentSection({loadComments}){

    return(
        <section className="comment-section">
            <div className="comment-section__wrapper">
                <h3 className="comment-section__comment-count"> {loadComments.length} Comments</h3>
                <div className="comment-section__add-comment-wrapper">
                    <ProfilePic image={ProfilePicImage} />
                    <div className="comment-section__add-comment">
                        <InputField />
                        <Button icon={add} text="comment" />
                    </div>
                </div>
            </div>
            {loadComments.map(comment =>(
                <Comment
                key={comment.id}
                commemtor={comment.name}
                commentDate={ new Date (comment.timestamp).toLocaleDateString()}
                comment={comment.comment}
                    />
            ))}
        </section>
    );
}

export default CommentSection;