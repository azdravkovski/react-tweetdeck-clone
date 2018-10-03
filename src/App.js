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
    super(props)

    this.state = {
      posts: [],
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    this.fetchPosts()
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
    this.filterPosts();
    console.log(this.state.value);
  }

  filterPosts() {
    let filteredPosts = this.state.posts.filter(post => {
      return post.title.toLowerCase().indexOf(this.state.value) !== -1;
    });
    this.setState({
      posts: filteredPosts
    })
  }

  fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
      .then(result => {
        let posts = result.filter((post, i) => {
          while (i < 10 && post !== undefined) {
            return {
              title: post.title,
              body: post.body
            }
          }
        })
        this.setState({
          posts: posts
        })
      }
      )
  }

  renderPosts() {
    let renderedPosts = this.state.posts.map((post, i) => {
      return <Post key={i} title={post.title} body={post.body} />;
    })
    return renderedPosts;
  }

  render() {
    return (
      <div className="post-deck">
        <div className="post-deck-header">
          <h2>Posts</h2>
          <input type="text" placeholder="Filter..." value={this.state.value} onChange={this.handleChange} />
        </div>
        <PostWrapper posts={this.renderPosts()} />
      </div>
    )
  }
}

const PostWrapper = (props) => {
  return (
    <div className="post-wrapper">
      {props.posts}
    </div>
  )
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
