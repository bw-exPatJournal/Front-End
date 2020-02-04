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

function App() {
  return (
    <Router>
      <div className="App">
        <header className="Header-Menu">
          <div className='Logo'>
            <img src={Logo} />
          </div>
          <div className='Menu-Form'>
            <form onSubmit={e => this.handleUserChange(e, this.state.searchUser)}>
              <input
                type="text"
                onChange={(e) => this.handlesChanges(e)}
                value='Field'
                placeholder='Search User'
              />

              <button>submit</button>
            </form>
          </div>
        </header>
        <Switch>
          <PrivateRoute exact path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </div>


    </Router>
  );
}

export default App;
