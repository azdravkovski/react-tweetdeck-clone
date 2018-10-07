import { combineReducers } from 'redux';
import deckReducer from './deckReducer';

export default combineReducers({
  deck: deckReducer
});