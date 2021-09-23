import React from 'react';
import './CustomarRegister.css';
import { useForm } from "react-hook-form";

const CustomarRegister = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
        <input className="input-field" name="Name"  placeholder="Name" />
        <br />
        <input className="input-field" name="email"  placeholder="Email" type="email" />
        <br />
        <input  className="input-field" name="phone" type="number"  placeholder="Phone"/>
        <br />
        <input  className="input-field" name="password" type="password"  placeholder="Password"/>
        <br />


        <input className="submit-btn" type="submit" value="Register" />
      </form>
        </div>
    );
};

export default CustomarRegister;