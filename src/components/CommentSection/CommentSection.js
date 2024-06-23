import React from "react";
import './CommentSection.scss';
import Comment from "../Comment/Comment";
import Textarea from "../Textarea/Textarea";
import ProfilePic from "../ProfilePic/ProfilePic";
import ProfilePicImage from '../../assets/images/Mohan-muruge.jpg';
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import add from '../../assets/icons/add_comment.svg';

function CommentSection({loadComments}){

    return(
        <section className="comment-section">
            <div className="comment-section__wrapper">
                <h3 className="comment-section__comment-count"> {loadComments.length} Comments</h3>
                <div className="comment-section__add-comment-wrapper">
                    <ProfilePic image={ProfilePicImage} />
                    <div className="comment-section__add-comment">
                        <Textarea text="Join the conversation" label="Add a new comment" />
                        <PrimaryButton icon={add} text="comment" />
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