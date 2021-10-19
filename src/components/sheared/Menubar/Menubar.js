import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "././../../../images/logo/logo.png";
import "./Menubar.css";
import { userContext } from "./../../../App";
import { useHistory, useLocation } from "react-router";

const Menubar = () => {
  const [isUser, setIsUser] = useState("");

  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "home";
  // let { from } = location.state || { from: { pathname: "/home" } };
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const Logout = () => {
    const userInfo = { ...loggedInUser };
    userInfo.email = "";
    setLoggedInUser(userInfo);
    history.push(redirect_url);
    sessionStorage.removeItem("email");
    setIsUser("");
  };

  const email = sessionStorage.getItem("email");

  useEffect(() => {
    fetch(`https://radiant-falls-78336.herokuapp.com/isUserAdmin/${email}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result) {
          setIsUser(result.role);
        } else {
          setIsUser("");
        }
      });
  }, []);
  // const redireact = () => {
  //   history.push("/home");
  // };
  return (
    <div className="menu-parent">
      <div className="row menu-container">
        <div className="col-md-1 col-lg-2 col-sm-12 logo">
          <img src={logo} alt="" />
        </div>
        <div className="col-md-11 col-lg-10 col-sm-12 logo d-flex align-items-center justify-content-center">
          <ul className="d-flex align-items-center justify-content-center menu-items">
            <Link className="menu-link" to="/home">
              <li className="menu-link">Home</li>
            </Link>
            <Link className="menu-link" to="/category">
              <li className="menu-link">Appointment</li>
            </Link>
            <Link className="menu-link" to="/about">
              <li className="menu-link">About</li>
            </Link>
            {isUser === "doctor" && (
              <Link className="menu-link" to="/doctorsDashboard">
                <li className="menu-link">Dashboard</li>
              </Link>
            )}
            {isUser === "patient" && (
              <Link className="menu-link" to="/customerDashboard">
                <li className="menu-link">Dashboard</li>
              </Link>
            )}
            {isUser === "admin" && (
              <Link className="menu-link" to="/adminDashboard">
                <li className="menu-link">Dashboard</li>
              </Link>
            )}
            <Link className="menu-link" to="/contact">
              <li className="menu-link">Contact</li>
            </Link>
            {isUser ? (
              <Link onClick={() => Logout()} className="menu-link" to="/">
                {<li className="menu-link">Logout</li>}
              </Link>
            ) : (
              <Link className="menu-link" to="/login">
                {" "}
                <li className="menu-link">Login</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
