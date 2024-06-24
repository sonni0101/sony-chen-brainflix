import React, { useState } from "react";
import './CommentSection.scss';
import Comment from "../Comment/Comment";
import Textarea from "../Textarea/Textarea";
import ProfilePic from "../ProfilePic/ProfilePic";
import ProfilePicImage from '../../assets/images/Mohan-muruge.jpg';
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import add from '../../assets/icons/add_comment.svg';

function CommentSection({ loadComments, onCommentSubmit }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { name, comment };
    onCommentSubmit(newComment);
    setName('');
    setComment('');
  };

  return (
    <section className="comment-section">
      <div className="comment-section__wrapper">
        <h3 className="comment-section__comment-count">{loadComments.length} Comments</h3>
        <div className="comment-section__add-comment-wrapper">
          <ProfilePic image={ProfilePicImage} />
          <form className="comment-section__add-comment" onSubmit={handleSubmit}>
            <Textarea
              text="Join the conversation"
              label="Add a new comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
            <PrimaryButton icon={add} text="comment" />
          </form>
        </div>
      </div>
      {loadComments.map(comment => (
        <Comment
          key={comment.id}
          commemtor={comment.name}
          commentDate={new Date(comment.timestamp).toLocaleDateString()}
          comment={comment.comment}
        />
      ))}
    </section>
  );
}

export default CommentSection;