import React, { useState } from "react";
import "./DoctorLogin.css";
import { useForm } from "react-hook-form";
import doctor from '../../../../images/logo/doctor-login.png';
import Footer from './../../../Home/Footer/Footer';
import DoctorRegister from "../DoctorRegister/DoctorRegister";

const DoctorLogin = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const [login,setLogin]=useState(false);

  return (
    <div className="doctor-login-main">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
        {login?<div className="doctor-login-div">
        <form onSubmit={handleSubmit(onSubmit)}>
        <input className="input-field" name="example"  placeholder="Email" />
        <br />
        <input  className="input-field" name="exampleRequired" type="password"  placeholder="Password"/>
        <br />


        <input className="submit-btn" type="submit" value="Login" />
      </form>
        </div>
        :
        <DoctorRegister></DoctorRegister>}

        {login?<p onClick={()=>setLogin(false)}  className="loginRegistration">are you new? create account</p>
        :
        <p onClick={()=>setLogin(true)} className="loginRegistration">Login</p>}
        </div>
        <div className="col-md-6">
          <div className="doctor-login">
            <img src={doctor} alt="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DoctorLogin;