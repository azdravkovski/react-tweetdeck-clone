import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TweetDeck Clone</h1>
        </header>
        <MainWrapper />
      </div>
    );
  }
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
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
      .then(posts => {
        let postArr = posts.map((post, i) => {
          while (i < 10) {
            return <Post title={post.title} body={post.body} />
          }
        })
        this.setState({
          posts: postArr
        })
      }
      )
  }

  render() {
    return (
      <div className="post-deck">
        <PostDeckHeader />
        {this.state.posts}
      </div>
    )
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

const PostDeckHeader = (props) => {
  return (
    <div className="post-deck-header">
      <h2>Posts</h2>
      <input type="text" placeholder="Search..." />
    </div>
  )
}

export default App;
