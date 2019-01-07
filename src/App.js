import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            P E T A R
          </p>
          <a
            className="App-link"
            href="https://koncar.edu.rs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Koncar
          </a>
        </header>
      </div>
    );
  }
}

export default App;
