import React, { useState } from "react";
import './CommentSection.scss';
import Comment from "../Comment/Comment";
import Textarea from "../Textarea/Textarea";
import ProfilePic from "../ProfilePic/ProfilePic";
import ProfilePicImage from '../../assets/images/Mohan-muruge.jpg';
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import add from '../../assets/icons/add_comment.svg';
// import deleteIcon from '../../assets/icons/delete_comment.svg'; // Comment out if the file doesn't exist

function CommentSection({ loadComments, onCommentSubmit, onCommentDelete }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { name:"Sony", comment };
    onCommentSubmit(newComment);
    setName('');
    setComment('');
  };

  const handleDelete = async (commentId) => {
    try {
      await onCommentDelete(commentId);
    } catch (error) {
      throw(error);
    }
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
              fieldHeight={"min-height"}
            />
            <PrimaryButton icon={add} text="comment" maxWidth="max-width" />
          </form>
        </div>
      </div>
      {loadComments.map(comment => (
        <div key={comment.id} className="comment-section__comment-item">
          <Comment
            commemtor={comment.name}
            commentDate={new Date(comment.timestamp).toLocaleDateString()}
            comment={comment.comment}
            onClick={() => handleDelete(comment.id)}
          />
        </div>
      ))}
    </section>
  );
}

export default CommentSection;