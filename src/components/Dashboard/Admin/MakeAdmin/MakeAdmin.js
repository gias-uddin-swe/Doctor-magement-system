import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../../../App";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "home";
  const onSubmit = (data) => {
    data.role = "admin";
    fetch("http://localhost:5000/makeAdmin", {
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

  const setEmail = (email) => {
    sessionStorage.setItem("email", email);
    console.log("hello");
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="name"
          placeholder="Name"
          {...register("name", { required: true })}
        />{" "}
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <br />
        <input
          className="input-field"
          name="phone"
          type="number"
          {...register("phone", { required: true })}
          placeholder="Phone Number"
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
    </div>
  );
};

export default MakeAdmin;
