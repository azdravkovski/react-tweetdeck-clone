import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <MainWrapper />
      </div>
    );
  }
}

const MainHeader = () => {
  return (
    <header className="App-header">
      <h1>TweetDeck Clone</h1>
    </header>
  )
}

class MainWrapper extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <PostDeck />
      </div>
    )
  }
}

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
      });
  }

  renderPosts() {
    const { posts, value } = this.state;
    return posts
      .filter(post => !value || post.title.toLowerCase().includes(value.toLowerCase()))
      .map(post => <Post key={post.id} {...post} />);

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

const Post = (props) => {
  return (
    <div className="post">
      <h3 className="post-title">{props.title}</h3>
      <p className="post-body">{props.body}</p>
    </div>
  )
}

export default App;
