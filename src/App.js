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
import MakeAdmin from "./components/Dashboard/Admin/MakeAdmin/MakeAdmin";
import ApporvedAppointments from "./components/Dashboard/Doctor/ApporvedAppointments/ApporvedAppointments";
import CustomerCarts from "./components/Dashboard/Custumar/CustomerCarts/CustomerCarts";
import PrivateRoute from "./components/Auth/Private/PrivateRoute";
import ActiveDoctor from "./components/ActiveDoctor/ActiveDoctor";
import ProcessPayment from "./components/Auth/PaymentGetWay/ProcessPayment";
import AmbulanceService from "./components/AmbulanceService/AmbulanceService";
import BloodDoner from "./components/Doner/BloodDoner";
import AmbulanceRegister from "./components/AmbulanceService/AmbulanceRegister";
import MainContact from "./components/MainContact/MainContact";
import MainAbout from "./components/MainAbout/MainAbout";
export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    patientName: "",
    name: "",
    doctorName: "",
    adminName: "",
    email: "",
    password: "",
    doctorEmail: "",
    photoURL: "",
    displayName: "",
    error: "",
    success: false,
    meetLink: "",
    cardNumber: "",
    paymentSuccess: false,
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
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/contact">
              <MainContact></MainContact>
            </Route>
            <Route exact path="/about">
              <MainAbout></MainAbout>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/category">
              <AllCategory></AllCategory>
            </Route>
            <PrivateRoute exact path="/adminDashboard">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/doctorsDashboard">
              <DoctorDashboard></DoctorDashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/customerDashboard">
              <CustomarDashboard></CustomarDashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/applyAppointment/:doctorsEmail">
              <ApplyAppointment></ApplyAppointment>
            </PrivateRoute>
            <PrivateRoute exact path="/submitPrescription">
              <SubmitPrescription></SubmitPrescription>
            </PrivateRoute>
            <PrivateRoute exact path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute exact path="/ApporvedAppointments">
              <ApporvedAppointments></ApporvedAppointments>
            </PrivateRoute>
            <Route exact path="/cart">
              <CustomerCarts></CustomerCarts>
            </Route>
            <Route exact path="/activeDoctor/:issue">
              <ActiveDoctor></ActiveDoctor>
            </Route>
            <PrivateRoute exact path="/processPayment/:doctorEmail">
              <ProcessPayment></ProcessPayment>
            </PrivateRoute>
            <Route exact path="/AmbulanceService">
              <AmbulanceService></AmbulanceService>
            </Route>
            <Route path="/bloodDonar">
              <BloodDoner></BloodDoner>
            </Route>
            <Route path="/AmbulanceRegister">
              <AmbulanceRegister></AmbulanceRegister>
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
