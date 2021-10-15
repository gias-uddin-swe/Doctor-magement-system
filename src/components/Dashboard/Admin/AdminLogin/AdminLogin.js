import React, { useContext, useState } from "react";
import "./AdminLogin.css";
import { useForm } from "react-hook-form";
import doctor from "../../../../images/logo/doctor-login.png";
import Footer from "../../../Home/Footer/Footer";
import { userContext } from "../../../../App";
import { useHistory, useLocation } from "react-router";

const AdminLogin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [isError, setIsError] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "home";
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/adminLogin", {
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

  const setEmail = (email) => {
    sessionStorage.setItem("email", email);
    console.log("hello");
  };
  return (
    <div>
      <div>
        <div className="doctor-login-main">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-6">
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
                    name="email"
                    placeholder="Email"
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
              </div>
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
    </div>
  );
};

export default AdminLogin;
