import React from "react";
import "./BloodDoner.css";
import { useForm } from "react-hook-form";

const MakeBloodDonar = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const email = sessionStorage.getItem("email");
  const onSubmit = (data) => {
    data.email = email;
    fetch("http://localhost:5000/bloodDonarInfo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
  };
  return (
    <div>
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
          value={`${email}`}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <select
          {...register("bloodGroup", { required: true })}
          className="input-field"
          required
        >
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="AB+">AB+</option>
          <option value="A-">A-</option>
          <option value="B-">B-</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <input
          className="input-field"
          name="phone"
          type="number"
          {...register("phone", { required: true })}
          placeholder="Phone Number"
        />
        <br />
        <select
          {...register("gender", { required: true })}
          className="input-field"
          required
        >
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <select
          {...register("Smoke", { required: true })}
          className="input-field"
          required
        >
          <option value="NoSmoke">NO-Smoke</option>
          <option value="Smoke">Smoke</option>
          <option value="other">other</option>
        </select>
        <br />
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MakeBloodDonar;
