import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  }

  gmailButton() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick="GmailAPI">Sign in with Gmail</button>
        </header>
      </div>
    );
  }
}

export default App;
