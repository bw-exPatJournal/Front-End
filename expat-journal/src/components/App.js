import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import './App.scss';

//Component imports
import Component from './Component';
import Register from './Register/Register'
import Login from './Login/Login';
import Test from './Test';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
          <PrivateRoute exact path='/' component={Component}/> 
          <Route path='/login' component={Login}/>
          </Switch>
        </header>
      </div>

     </Router>
  );
}

export default App;
