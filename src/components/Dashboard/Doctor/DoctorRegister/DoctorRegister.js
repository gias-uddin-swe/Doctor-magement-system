import React from "react";
import "./DoctorRegister.css";
import { useForm } from "react-hook-form";

const DoctorRegister = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="input-field" name="Name" placeholder="Name" />
        <br />
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
        />
        <br />
        <input
          className="input-field"
          name="phone"
          type="number"
          placeholder="Phone"
        />
        <br />
        <input
          className="input-field"
          name="role"
          type="text"
          placeholder="role"
        />
        <br />
        <input
          className="input-field"
          name="chamber"
          type="text"
          placeholder="Chamber"
        />
        <br />
        <input
          className="input-field"
          name="password"
          type="password"
          placeholder="Password"
        />
        <br />
        <input className="input-field" name="image" type="file" required />
        <br />

        <input className="submit-btn" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default DoctorRegister;
