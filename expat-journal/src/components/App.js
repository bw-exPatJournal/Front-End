import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";
import logo from "./logo.svg";
import "./App.scss";

//Component imports
// import Component from "./Component";
import Login from "./Login/Login";
import AddExperienceForm from "./AddExperienceForm/AddExperienceForm";
import Cards from "./Cards";
import UpdateExperienceForm from "./AddExperienceForm/UpdateExperienceForm";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <PrivateRoute exact path="/home" />
        {/* <Route path='/' component={Component}/> */}
      </Switch>
      <Route path="/edit">
        <Cards />
      </Route>
      <Route path="/addForm">
        <AddExperienceForm />
      </Route>
      <Route path="/update-form/:id">
        {" "}
        <UpdateExperienceForm />
      </Route>
    </Router>
  );
}

export default App;
