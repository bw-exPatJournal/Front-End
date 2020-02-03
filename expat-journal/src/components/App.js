import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Component from './Component';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Component/>
          <p>
            Edit <code>src/components/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    // </Router>
  );
}

export default App;
