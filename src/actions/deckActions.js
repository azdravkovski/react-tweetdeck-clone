import { FETCH_POSTS, FETCH_COMMENTS, FILTER_POSTS, CLOSE_DECK } from "./deckActionTypes";

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      });
    });
};

export const fetchComments = (id, title) => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(comments => {
      dispatch({
        type: FETCH_COMMENTS,
        payload: {
          id,
          title,
          comments
        }
      });
    });
};

export const filterPosts = searchStr => dispatch => {
  dispatch({
    type: FILTER_POSTS,
    payload: searchStr
  });
};

export const closeDeck = id => dispatch => {
  dispatch({
    type: CLOSE_DECK,
    payload: id
  });
};
