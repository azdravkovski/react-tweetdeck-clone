import React, { Component } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import MainWrapper from "./components/MainWrapper/MainWrapper";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MainHeader />
          <MainWrapper />
        </div>
      </Provider>
    );
  }
}

export default App;
