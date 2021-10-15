import React from "react";
import "./SubmitPrescription.css";
import { useForm } from "react-hook-form";

const SubmitPrescription = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field border border-none"
          name="prescription"
          type="file"
          {...register("prescription", { required: false })}
        />
        <br />
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SubmitPrescription;
