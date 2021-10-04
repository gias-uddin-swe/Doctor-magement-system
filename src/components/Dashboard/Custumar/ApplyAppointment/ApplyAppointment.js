import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const ApplyAppointment = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log("heelo ", data);
  };

  const { issueId } = useParams();
  console.log(issueId);

  return (
    <div className="mt-5">
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
          type="text"
          placeholder="Enter Your Age"
          required
          {...register("problem", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="email"
          type="email"
          placeholder="Enter Your Age"
          required
          {...register("email", { required: true })}
        />
        <br />

        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ApplyAppointment;
