import React, { Component } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import MainWrapper from './components/MainWrapper/MainWrapper';
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

export default App;
