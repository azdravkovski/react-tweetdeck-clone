import {
  FETCH_POSTS,
  FETCH_COMMENTS,
  FILTER_POSTS,
  CLOSE_DECK
} from "../actions/deckActionTypes";

const initialState = {
  posts: [],
  activeDecks: [],
  filterKeyword: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };

    case FETCH_COMMENTS:
      if (!state.activeDecks.find(deck => deck.id === action.payload.id)) {
        return {
          ...state,
          activeDecks: [...state.activeDecks, action.payload]
        };
      } else {
        return {
          ...state,
          activeDecks: [...state.activeDecks]
        };
      }

    case FILTER_POSTS:
      return {
        ...state,
        filterKeyword: action.payload
      };

    case CLOSE_DECK:
      return {
        ...state,
        activeDecks: state.activeDecks.filter(post => {
          return post.id === action.payload ? false : true;
        })
      };

    default:
      return state;
  }
};
