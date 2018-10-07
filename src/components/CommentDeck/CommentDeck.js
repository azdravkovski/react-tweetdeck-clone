import React from 'react';
import Comment from '../Comment/Comment';
import './CommentDeck.css';

const CommentDeck = (props) => {
  if (props.show) {
    return (
      <div className="comment-deck">
        <div className="comment-deck-header">
          <h2>Comments</h2>
          <span onClick={props.onClose}>×</span>
        </div>
        <div className="comment-wrapper">
          {props.comments.map(comment => {
            return <Comment name={comment.name} body={comment.body} />
          })}
        </div>
      </div>
    )
  } else {
    console.log(props.show);
    return null
  }
}

export default CommentDeck;