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
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      commentDecks: []
    }

    this.fetchComments = this.fetchComments.bind(this);
  }

  fetchComments(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(data => data.json())
      .then(result => {
        let comments = result.map(comment => {
          return comment;
        })
        //Add CommentDecks to state
        let addedDecks = [];
        addedDecks.push(<CommentDeck comments={comments} />);
        this.setState({
          comments: comments,
          commentDecks: [...this.state.commentDecks, addedDecks]
        })
        console.log(this.state.commentDecks)
      })
      .catch(error => console.log(error))
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

const Post = (props) => {
  return (
    <div className="post" onClick={() => props.postClick(props.id)}>
      <h3 className="post-title">{props.title}</h3>
      <p className="post-body">{props.body}</p>
    </div>
  )
}

const CommentDeck = (props) => {
  return (
    <div className="comment-deck">
      <div className="comment-deck-header">
        <h2>Comments</h2>
        <span>×</span>
      </div>
      <div className="comment-wrapper">
        {props.comments.map(comment => {
          return <Comment name={comment.name} body={comment.body} />
        })}
      </div>
    </div>

  )
}

const Comment = (props) => {
  return (
    <div className="comment">
      <h3 className="comment-name">{props.name}</h3>
      <p className="comment-body">{props.body}</p>
    </div>
  )
}


export default App;
