import React, { useContext, useState } from "react";
import "./DoctorRegister.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../../../App";

const DoctorRegister = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [imageURL, setImageURL] = useState(null);
  const [isError, setIsError] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "home";
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    data.file = imageURL;
    data.imageURL = imageURL;
    data.activity = "online";
    data.role = "doctor";

    fetch("http://localhost:5000/addDoctors", {
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
    //
  };
  const setEmail = (email) => {
    sessionStorage.setItem("email", email);
    console.log("hello");
  };

  const handleImageUpload = (event) => {
    // console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "2cba9267a477da53356313c7b21d374e");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // console.log(imageURL);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isError ? (
          <p className="text-danger">
            Email and Password is not valid try again
          </p>
        ) : (
          ""
        )}
        <input
          className="input-field"
          name="Name"
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
          placeholder="Phone"
          {...register("phone", { required: true })}
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
        <br />
        <input
          className="input-field"
          name="chamber"
          type="text"
          placeholder="Chamber"
          {...register("chamber", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="password"
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />
        <br />
        <select
          {...register("Expertise", { required: true })}
          className="pending p-3 input-field"
        >
          <option defaultValue="Cardiologist">Cardiologist</option>
          <option defaultValue="Allergists">Allergists</option>
          <option defaultValue="Dermatologists">Dermatologists</option>
          <option defaultValue="Ophthalmologists">Ophthalmologists</option>
          <option defaultValue="Endocrinologists">Endocrinologists</option>
          <option defaultValue="Nephrologists">Nephrologists</option>
          <option defaultValue="Urologists">Urologists</option>
          <option defaultValue="Pulmonologists">Pulmonologists</option>
          <option defaultValue="Radiologists">Radiologists</option>
        </select>
        <br />
        <input
          className="input-field"
          name="file"
          onChange={handleImageUpload}
          type="file"
          id="uploadImage"
          required
        />
        <br />

        <input className="submit-btn" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default DoctorRegister;
