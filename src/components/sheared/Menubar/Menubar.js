import React from "react";
import { Link } from "react-router-dom";
import logo from "././../../../images/logo/logo.png";
import "./Menubar.css";

const Menubar = () => {
  return (
    <div className="menu-parent">
      <div className="row menu-container">
        <div className="col-md-1 col-lg-2 col-sm-12 logo">
          <img src={logo} alt="" />
        </div>
        <div className="col-md-11 col-lg-10 col-sm-12 logo d-flex align-items-center justify-content-center">
          <ul className="d-flex align-items-center justify-content-center menu-items">
            <Link className="menu-link" to="/home">
              <li>Home</li>
            </Link>
            <Link className="menu-link" to="/adminDashboard">
              <li>Get Appointment</li>
            </Link>
            <Link className="menu-link" to="/doctorsDashboard">
              <li>Doctors</li>
            </Link>
            <Link className="menu-link" to="/customerDashboard">
              <li>Contact us</li>
            </Link>
            <Link className="menu-link" to="/login">
              {" "}
              <li>Login</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
