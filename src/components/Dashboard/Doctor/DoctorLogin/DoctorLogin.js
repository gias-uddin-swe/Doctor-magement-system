import React, { useContext, useState } from "react";
import "./DoctorLogin.css";
import { useForm } from "react-hook-form";
import doctor from "../../../../images/logo/doctor-login.png";
import Footer from "./../../../Home/Footer/Footer";
import DoctorRegister from "../DoctorRegister/DoctorRegister";
import { userContext } from "../../../../App";
import { useHistory, useLocation } from "react-router";

const DoctorLogin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [isError, setIsError] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "home";
  const onSubmit = (data) => {
    fetch("http://localhost:5000/doctorLogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setEmail(data.email);
          const userInfo = { ...loggedInUser };
          userInfo.email = data.email;
          userInfo.password = data.password;
          userInfo.isLoggedIn = true;
          setLoggedInUser(userInfo);
          history.push(redirect_url);
        } else {
          setIsError(true);
        }
      });
  };

  const setEmail = (email) => {
    sessionStorage.setItem("email", email);
    console.log("hello");
  };
  const [login, setLogin] = useState(false);

  return (
    <div className="doctor-login-main">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          {login ? (
            <div className="doctor-login-div">
              {isError ? (
                <p className="text-danger">
                  Email and Password is not valid try again
                </p>
              ) : (
                ""
              )}
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="input-field"
                  name="example"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                <br />
                <input
                  className="input-field"
                  name="exampleRequired"
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <br />

                <input className="submit-btn" type="submit" value="Login" />
              </form>
            </div>
          ) : (
            <DoctorRegister></DoctorRegister>
          )}

          {login ? (
            <p onClick={() => setLogin(false)} className="loginRegistration">
              are you new? create account
            </p>
          ) : (
            <p onClick={() => setLogin(true)} className="loginRegistration">
              Login
            </p>
          )}
        </div>
        <div className="col-md-6">
          <div className="doctor-login">
            <img src={doctor} alt="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DoctorLogin;
