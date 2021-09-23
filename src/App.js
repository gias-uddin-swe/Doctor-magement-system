import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/sheared/Header/Header.js'
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DoctorLogin from "./components/Dashboard/Doctor/DoctorLogin/DoctorLogin";
import Error from "./components/Error/Error";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
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
  
   <Route path="/*">
   <Error></Error>
   </Route>
  
   
   </Switch>
   
    </Router>
    </div>
   
  );
}

export default App;
