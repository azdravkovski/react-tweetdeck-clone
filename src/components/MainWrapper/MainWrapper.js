import React, { Component } from "react";
import "./MainWrapper.css";
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/deckActions';
import PostDeck from "../PostDeck/PostDeck";
import CommentDeck from "../CommentDeck/CommentDeck";

class MainWrapper extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderCommentDecks() {
    let activeDecks = this.props.activeDecks.map((activeDeck) => {
      return <CommentDeck key={activeDeck.id} comments={activeDeck} />;
    })
    return activeDecks;
  }

  render() {
    return (
      <div className="main-wrapper">
        <PostDeck posts={this.props.posts.slice(0, 10)} />
        {this.renderCommentDecks()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.deck.posts,
  activeDecks: state.deck.activeDecks
});

export default connect(mapStateToProps, { fetchPosts })(MainWrapper);
