import React from 'react';
import './Comment.css';

const Comment = (props) => {
  return (
    <div className="comment">
      <h3 className="comment-name">{props.name}</h3>
      <p className="comment-body">{props.body}</p>
    </div>
  )
}

export default Comment;