import React, { useContext, useState } from "react";
import "./CustomarLogin.css";
import { useForm } from "react-hook-form";
import CustomarRegister from "../CustomarRegister/CustomarRegister";
import doctor from "../../../../images/logo/doctor-login.png";
import Footer from "../../../Home/Footer/Footer";
import { userContext } from "../../../../App";
import { useHistory, useLocation } from "react-router";
import useFirebase from "./../../../Hook/useFirebase";

const CustomarLogin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [isError, setIsError] = useState(false);
  const { googleSignIn } = useFirebase();
  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "home";
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    fetch("https://radiant-falls-78336.herokuapp.com/patientLogin", {
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
    console.log(data);
  };
  const [login, setLogin] = useState(false);

  // const redirect = () => {
  //   const url = "/customerDashboard";
  //   history.push(url);
  // };
  const setEmail = (email) => {
    sessionStorage.setItem("email", email);
    console.log("hello");
  };

  return (
    <div>
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
                    placeholder="Email"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  <br />
                  <input
                    className="input-field"
                    name="password"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <br />

                  <input className="submit-btn" type="submit" value="Login" />
                </form>
                <button onClick={googleSignIn} className="btn btn-warning">
                  Sign in with Google
                </button>
              </div>
            ) : (
              <CustomarRegister></CustomarRegister>
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
    </div>
  );
};

export default CustomarLogin;
