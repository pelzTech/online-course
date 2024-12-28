// src/components/CommentSection.jsx
import React, { useState } from "react";

const CommentSection = ({ courseId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, text: newComment }]);
      setNewComment(""); // Reset the input field
    }
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      <textarea
        value={newComment}
        onChange={handleCommentChange}
        placeholder="Add a comment..."
      />
      <button onClick={handleSubmitComment}>Submit Comment</button>
    </div>
  );
};

export default CommentSection;
