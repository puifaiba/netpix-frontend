import React from "react";
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LogIn from './containers/LogIn'
import NavBar from './containers/NavBar'
import Home from "./containers/Home";
import Landing from "./containers/Landing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/browse" component={Home} />
      <Route exact path="/login" component={LogIn} />
    </div>
  );
}

export default App;
