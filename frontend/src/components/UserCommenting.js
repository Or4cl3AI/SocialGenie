// frontend/src/components/UserCommenting.js

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments, postComment, deleteComment } from '../actions/commentActions';

const UserCommenting = () => {
  const [comment, setComment] = useState('');
  const comments = useSelector(state => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    dispatch(postComment(comment));
    setComment('');
  };

  const handleCommentDelete = (commentId) => {
    dispatch(deleteComment(commentId));
  };

  return (
    <div>
      <h2>User Commenting</h2>
      <form onSubmit={handleCommentSubmit}>
        <input type="text" value={comment} onChange={handleCommentChange} />
        <button type="submit">Post Comment</button>
      </form>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => handleCommentDelete(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserCommenting;