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
import DashboardLayout from './Components/DashboardLayout/DashboardLayout';
import DoctorDashboard from './Components/DoctorDashboard/DoctorDashboard';
import DoctorAppointment from './Components/DoctorAppointment/DoctorAppointment';
import Patients from './Components/Patients/Patients';
import Prescriptions from './Components/Prescriptions/Prescriptions';



export const apiURL = "http://localhost:4000"



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/home">
            <Home/>
          </Route>

          <Route exact path="/appointment">
            <Appointment/>
          </Route>

          <Route exact path="/doctor">
            <Doctor/>
          </Route>

          <Route exact path="/doctor/dashboard">
            <DashboardLayout>
              <DoctorDashboard/>
            </DashboardLayout>
          </Route>

          <Route exact path="/doctor/appointment">
            <DashboardLayout>
              <DoctorAppointment/>
            </DashboardLayout>
          </Route>

          <Route exact path="/doctor/patients">
            <DashboardLayout>
              <Patients/>
            </DashboardLayout>
          </Route>

          <Route exact path="/doctor/prescriptions">
            <DashboardLayout>
              <Prescriptions/>
            </DashboardLayout>
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
