import React, { Component } from "react";
import Post from "../Post/Post";
import FilterBar from "../FilterBar/FilterBar";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/deckActions";
import "./PostDeck.css";

class PostDeck extends Component {
  renderPosts() {
    let postDeckItems;

    const posts = this.props.posts.slice(0, 10);
    const { filterKeyword } = this.props;

    if (posts.length > 0) {
      let filteredPosts = posts.filter(post => {
        return post.title.toLowerCase().includes(filterKeyword.toLowerCase());
      });

      postDeckItems = filteredPosts.map(post => {
        return <Post key={post.id} post={post} />;
      });
    }

    return postDeckItems;
  }

  render() {
    return (
      <div className="post-deck">
        <div className="post-deck-header">
          <h2>Posts</h2>
          <FilterBar />
        </div>
        <div className="post-wrapper">{this.renderPosts()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.deck.posts,
  filterKeyword: state.deck.filterKeyword
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostDeck);
