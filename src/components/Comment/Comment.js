import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../actions/deckActions";
import "./Comment.css";

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <h3 className="comment-name">{this.props.comment.name}</h3>
        <p className="comment-body">{this.props.comment.body}</p>
      </div>
    );
  }
}

export default connect(null, { fetchComments })(Comment);
