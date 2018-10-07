import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const middleware = [thunk];

const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(...middleware)
);

store.subscribe(() => {
  saveState(store.getState());
})

console.log(localStorage);

export default store;
