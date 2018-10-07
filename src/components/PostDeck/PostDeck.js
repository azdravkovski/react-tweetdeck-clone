import React, { Component } from 'react';
import Post from '../Post/Post';
import './PostDeck.css';

class PostDeck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      value: ""
    };

  }

  componentDidMount() {
    this.fetchPosts();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
      .then(result => {
        let posts = result.filter((post, i) => {
          if (i < 10 && post !== undefined) {
            return post;
          }
        });
        this.setState({ posts });
      })
      .catch(error => console.log(error));
  }

  renderPosts() {
    const { posts, value } = this.state;
    return posts
      .filter(post => !value || post.title.toLowerCase().includes(value.toLowerCase()))
      .map(post => <Post key={post.id} {...post} id={post.id} postClick={this.props.postClick} />);

  }

  render() {
    return (
      <div className="post-deck">
        <div className="post-deck-header">
          <h2>Posts</h2>
          <input
            type="text"
            placeholder="Filter..."
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="post-wrapper">{this.renderPosts()}</div>
      </div>
    );
  }
}

export default PostDeck;