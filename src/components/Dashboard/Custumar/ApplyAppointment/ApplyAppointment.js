import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import "./ApplyAppointment.css";
import { userContext } from "./../../../../App";
import Footer from "../../../Home/Footer/Footer";

const ApplyAppointment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const { doctorsEmail } = useParams();
  console.log(doctorsEmail);
  const { register, handleSubmit, watch, errors } = useForm();
  const email = sessionStorage.getItem("email");

  const onSubmit = (data) => {
    data.doctorEmail = doctorsEmail;
    data.date = new Date();
    data.cardNumber = loggedInUser.cardNumber;
    data.paymentSuccess = loggedInUser.paymentSuccess;
    data.status = "pending";
    console.log(data);
    fetch("https://radiant-falls-78336.herokuapp.com/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          redireact();
        }
      });
  };

  const redireact = () => {
    history.push("/customerDashboard");
  };
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input-field"
              name="name"
              placeholder="Enter your name"
              required
              {...register("name", { required: true })}
            />

            <input
              className="input-field"
              name="customerPhone"
              type="number"
              required
              placeholder="Enter Phone Number"
              {...register("customerPhone", { required: true })}
            />
            <br />
            <input
              className="input-field"
              name="age"
              type="number"
              placeholder="Enter Your Age"
              required
              {...register("age", { required: true })}
            />
            <input
              className="input-field"
              name="problem"
              type="email"
              // placeholder="Enter Your Email"
              defaultValue={`${email}`}
              {...register("email", { required: true })}
            />
            <br />
            <input
              id="problemDetails"
              className="input-field"
              name="problemDetails"
              type="text-area"
              placeholder="Type your problem Details"
              required
              {...register("problemDetails", { required: true })}
            />
            <br />

            <input className="submit-btn" type="submit" value="Submit" />
          </form>
        </div>

        <div className="col-md-6">
          <div className="document-image">
            <img
              className="w-100"
              src="https://i.ibb.co/rmdT9FX/undraw-Documents-re-isxv.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ApplyAppointment;
