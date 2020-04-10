import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Appointment from './Components/Appointment/Appointment';
import Doctor from './Components/Doctor/Doctor';

export const apiURL = "http://localhost:4000"



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/appointment">
            <Appointment/>
          </Route>
          <Route path="/doctor">
            <Doctor/>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
