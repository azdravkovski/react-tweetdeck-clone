import React, { Component } from 'react';
import './MainWrapper.css';
import PostDeck from '../PostDeck/PostDeck';
import CommentDeck from '../CommentDeck/CommentDeck';

class MainWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      commentDecks: [],
      isActive: true
    }

    this.fetchComments = this.fetchComments.bind(this);
    this.closeDeck = this.closeDeck.bind(this);
  }

  fetchComments(id) {
    let addedDecks = [];
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(data => data.json())
      .then(result => {
        let comments = result.map(comment => {
          return comment;
        })
        return comments;
      })
      .then(comments => {
        addedDecks.push(<CommentDeck comments={comments} onClose={this.closeDeck} show={true} />);
        this.setState({
          comments: comments,
          commentDecks: [...this.state.commentDecks, ...addedDecks],
          isActive: false
        })
      })
      .catch(error => console.log(error))
  }

  closeDeck() {
    this.setState({
      isActive: false,
    });
    console.log(this.state.isActive);
  }

  render() {
    return (
      <div className="main-wrapper">
        <PostDeck postClick={this.fetchComments} />
        {this.state.commentDecks}
      </div>
    )
  }
}

export default MainWrapper;