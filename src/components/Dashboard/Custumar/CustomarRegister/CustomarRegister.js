import React, { useContext, useState } from "react";
import "./CustomarRegister.css";
import { useForm } from "react-hook-form";
import { userContext } from "../../../../App";
import { useHistory, useLocation } from "react-router";
import useFirebase from "./../../../Hook/useFirebase";

const CustomarRegister = () => {
  const { googleSignIn } = useFirebase();
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "home";
  const onSubmit = (data) => {
    data.role = "patient";

    fetch("http://localhost:5000/patientRegister", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setEmail(data.email);
          const userInfo = { ...loggedInUser };
          userInfo.name = data.name;
          userInfo.email = data.email;
          userInfo.isLoggedIn = true;
          setLoggedInUser(userInfo);
          history.push(redirect_url);
        }
      });
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="name"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="phone"
          type="number"
          {...register("phone", { required: true })}
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

        <input className="submit-btn" type="submit" value="Register" />
      </form>
      <button onClick={googleSignIn} className="btn btn-warning mt-3">
        Sign in with Google
      </button>
    </div>
  );
};

export default CustomarRegister;
