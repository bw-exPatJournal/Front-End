import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import './App.scss';
import Logo from '../imgs/logo.png'

//Component imports
import Component from './Component';
import Register from './Register/Register'
import Login from './Login/Login';
import Test from './Test';
import Home from './Home/Home';

//Icon imports
import { FaSearch } from 'react-icons/fa'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="Header-Menu">
          <div className='Logo'>
            <img src={Logo} alt='Capture Logo' />
          </div>
          <div className='Menu-Form'>
            <a href='/register'>Register</a>
            <a href='/login'>Login</a>
          </div>
        </header>

        <PrivateRoute path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />

      </div>
    </Router>
  );
}

export default App;
