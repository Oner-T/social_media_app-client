import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";

import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={home}/>
            <Route path="/login" component={login}/>
            <Route path="/signup" component={signup}/>
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App;
