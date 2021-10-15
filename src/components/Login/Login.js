import React, { useState } from "react";
import AdminLogin from "../Dashboard/Admin/AdminLogin/AdminLogin";
import CustomarLogin from "../Dashboard/Custumar/CustomarLogin/CustomarLogin";
import DoctorLogin from "../Dashboard/Doctor/DoctorLogin/DoctorLogin";
import "./Login.css";

const Login = () => {
  const [condition, setCondition] = useState({
    doctor: false,
    customer: true,
    admin: false,
  });
  const handleDoctorLogin = () => {
    const newCondition = { ...condition };
    newCondition.admin = false;
    newCondition.customer = false;
    newCondition.doctor = true;

    setCondition(newCondition);
  };
  const handleCustomerLogin = () => {
    const newCondition = { ...condition };
    newCondition.admin = false;
    newCondition.customer = true;
    newCondition.doctor = false;

    setCondition(newCondition);
  };
  const handleAdminLogin = () => {
    const newCondition = { ...condition };
    newCondition.admin = true;
    newCondition.customer = false;
    newCondition.doctor = false;

    setCondition(newCondition);
  };
  console.log(condition);
  return (
    <div>
      <div className="row">
        <div className="col-md-6 all-btn">
          <button onClick={handleDoctorLogin} className="btn btn-success m-3">
            Doctor Login
          </button>
          <button onClick={handleCustomerLogin} className="btn btn-info m-3">
            Customer Login
          </button>
          <button onClick={handleAdminLogin} className="btn btn-danger m-3">
            Admin Login
          </button>
        </div>
        {condition.doctor ? (
          <DoctorLogin></DoctorLogin>
        ) : condition.customer ? (
          <CustomarLogin></CustomarLogin>
        ) : (
          <AdminLogin></AdminLogin>
        )}
      </div>
    </div>
  );
};

export default Login;
