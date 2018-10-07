import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../actions/deckActions";
import "./Post.css";

class Post extends Component {
  render() {
    return (
      <div
        className="post"
        onClick={() =>
          this.props.fetchComments(this.props.post.id, this.props.post.title)
        }
      >
        <h3 className="post-title">{this.props.post.title}</h3>
        <p className="post-body">{this.props.post.body}</p>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchComments }
)(Post);
