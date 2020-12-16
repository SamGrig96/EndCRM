import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import Home from "./components/home/Home"
import SignUp from "./components/signup/SignUp"
import SignIn from  "./components/signin/SignIn"
import Dashboard  from  "./components/Dashboard/Dashboard"
import Calendar  from  "./components/calendar/calendar"
import PassChange from "./components/passchange/passchange"
import ConfirmPass from "./components/confirmpass/confirmpass"
import Settings from './components/Settings/settings'
import Confirmmsg from './components/confirmmsg/confirmmsg'
import "./App.css";




class App extends Component {
  render() {
    return (

      <Router  >
            <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/passchange" component={PassChange}/>
        <Route exact path="/confirmpass" component={ConfirmPass}/>
        <Route exact path="/confirmmsg" component={Confirmmsg}/>
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Home} />
      </Switch>
      {/*<AppContainer />*/}
      </Router>


    );
  }
}

export default App;
