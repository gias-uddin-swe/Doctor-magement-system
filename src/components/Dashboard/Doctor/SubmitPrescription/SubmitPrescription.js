import React, { useState } from "react";
import "./SubmitPrescription.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SubmitPrescription = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const [file, setFile] = useState({});
  const handleFileChange = (e) => {
    // setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const onSubmit = (data) => {
    console.log(data.prescription[0]);
    const prescription = data.prescription[0];
    const formData = new FormData();
    formData.append("file", prescription);

    fetch("http://localhost:5000/prescription", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mt-5">
      {/* <input type="file" onChange={handleFileChange} /> */}
      <div>
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
      <div></div>
    </div>
  );
};

export default SubmitPrescription;
