import React, { createContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/sheared/Header/Header.js";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DoctorLogin from "./components/Dashboard/Doctor/DoctorLogin/DoctorLogin";
import Error from "./components/Error/Error";
import Login from "./components/Login/Login";
import AllCategory from "./components/AllCategory/AllCategory";
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard/AdminDashboard";
import CustomarDashboard from "./components/Dashboard/Custumar/CustomarDashboard/CustomarDashboard";
import DoctorDashboard from "./components/Dashboard/Doctor/DoctorDashboard/DoctorDashboard";
import ApplyAppointment from "./components/Dashboard/Custumar/ApplyAppointment/ApplyAppointment";
import SubmitPrescription from "./components/Dashboard/Doctor/SubmitPrescription/SubmitPrescription";
export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
    password: "",
    photoURL: "",
    displayName: "",
    error: "",
    success: false,
    showError: false,
    isLoggedIn: false,
  });

  return (
    <div className="App">
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/category">
              <AllCategory></AllCategory>
            </Route>
            <Route path="/adminDashboard">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route path="/doctorsDashboard">
              <DoctorDashboard></DoctorDashboard>
            </Route>
            <Route path="/customerDashboard">
              <CustomarDashboard></CustomarDashboard>
            </Route>
            <Route path="/appointmentArea/:issueId">
              <ApplyAppointment></ApplyAppointment>
            </Route>
            <Route path="/submitPrescription">
              <SubmitPrescription></SubmitPrescription>
            </Route>

            <Route path="/*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
