import React from 'react';
import './Post.css';

const Post = (props) => {
  return (
    <div className="post" onClick={() => props.postClick(props.id)}>
      <h3 className="post-title">{props.title}</h3>
      <p className="post-body">{props.body}</p>
    </div>
  )
}

export default Post;