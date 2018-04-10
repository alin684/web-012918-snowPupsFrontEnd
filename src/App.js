import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SledList from './components/SledList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Yo Michelle Rebranchers</h1>
        </header>
        <SledList />
      </div>
    );
  }
}

export default App;
