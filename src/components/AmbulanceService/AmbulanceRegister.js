import React from "react";
import "./AmbulanceService.css";
import { useForm } from "react-hook-form";

const AmbulanceRegister = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    fetch("https://radiant-falls-78336.herokuapp.com/AmbulanceRegister", {
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
          name="DriverName"
          placeholder="DriverName"
          {...register("DriverName", { required: true })}
        />{" "}
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
          name="carModel"
          type="carModel"
          {...register("carModel", { required: true })}
          placeholder="Ambulance Model"
        />
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
          <option value="male">male</option>
          <option value="female">female</option>

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
        <input
          className="input-field"
          name="Licence
          "
          type="number"
          {...register("phone", { required: true })}
          placeholder="Phone Number"
        />
        <br />
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AmbulanceRegister;
