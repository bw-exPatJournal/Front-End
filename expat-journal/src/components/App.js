import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import logo from './logo.svg';
import './App.scss';

//Component imports
import Component from './Component';
import Login from './Login/Login';
import Register from './Register/Register';

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
      <Switch>
        <PrivateRoute exact path='/home' component={Component}/> 
        {/* <Route path='/' component={Component}/> */}
        <Route path='/register' component={Register} />
      </Switch>
     </Router>
  );
}

export default App;
