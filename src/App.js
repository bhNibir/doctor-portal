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


//Local Sever
// export const apiURL = "http://localhost:4000"

export const apiURL = "https://agile-savannah-65614.herokuapp.com"



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
            <DashboardLayout title={"Doctor's Dashboard"}>
              <DoctorDashboard/>
            </DashboardLayout>
          </Route>

          <Route exact path="/doctor/appointment">
            <DashboardLayout title={"Appointment"}>
              <DoctorAppointment/>
            </DashboardLayout>
          </Route>

          <Route exact path="/doctor/patients">
            <DashboardLayout title={"Patients"} >
              <Patients/>
            </DashboardLayout>
          </Route>

          <Route exact path="/doctor/prescriptions">
            <DashboardLayout title={"Prescriptions"}>
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
