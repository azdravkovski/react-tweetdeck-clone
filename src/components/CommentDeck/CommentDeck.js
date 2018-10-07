import React, { Component } from "react";
import Comment from "../Comment/Comment";
import "./CommentDeck.css";
import { connect } from 'react-redux';
import { fetchComments, closeDeck } from '../../actions/deckActions';

class CommentDeck extends Component {
  renderComments() {
    let commentDeckItems = this.props.comments.comments.map(comment => {
      return <Comment key={comment.id} comment={comment} />
    })
    return commentDeckItems;
  }

  render() {
    return (
      <div className="comment-deck">
        <div className="comment-deck-header">
          <h2>Comments for post {this.props.comments.id}</h2>
          <span onClick={() => this.props.closeDeck(this.props.comments.id)}>×</span>
        </div>
        <div className="comment-wrapper">
          {this.renderComments()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeDecks: state.deck.activeDecks
});

export default connect(mapStateToProps, { fetchComments, closeDeck })(CommentDeck);
