import React, { useState, useEffect } from "react";
import './index.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import LogIn from './containers/LogIn'
import NavBar from './containers/NavBar'
import Home from "./containers/Home";
import Landing from "./containers/Landing";

function App() {


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/browse" component={Home} />
        <Route exact path="/login" component={LogIn} />
        <Route component={Landing} />
      </Switch>

    </div>
  );
}

export default withRouter(App);
