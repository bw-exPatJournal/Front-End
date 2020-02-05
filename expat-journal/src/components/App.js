import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";
import logo from "./logo.svg";
import "./App.scss";

//Component imports
// import Component from "./Component";
import Login from "./Login/Login";
import AddExperienceForm from "./AddExperienceForm/AddExperienceForm";
import CardsInfo from "./CardsInfo";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <PrivateRoute exact path="/home" />
        {/* <Route path='/' component={Component}/> */}
      </Switch>
      <Route path="/edit">
        <CardsInfo />
        <AddExperienceForm />
      </Route>
      <Route path="/update-form/:id"></Route>
    </Router>
  );
}

export default App;
