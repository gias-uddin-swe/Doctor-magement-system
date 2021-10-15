import React from "react";
import "./ServiceCart.css";
import doctor from "../../../images/logo/doctor.png";
import abulance from "../../../images/logo/ambulance.png";
import blood from "../../../images/logo/blood-bag.png";
import { Link } from "react-router-dom";

const ServiceCart = () => {
  const fakeData = [
    {
      title: doctor,
      descriptor:
        "Now, you can book your appointment online! Just register or Login",
      buttonTitle: "Get Appointment",
      url: "/category",
    },
    {
      title: abulance,
      descriptor:
        "Now, you can book your appointment online! Just register or Login",
      buttonTitle: "Get Ambulance",
      url: "/AmbulanceService",
    },
    {
      title: blood,
      descriptor:
        "Now, you can book your appointment online! Just register or Login",
      buttonTitle: "Get Blood",
      url: "/bloodDonar",
    },
  ];
  return (
    <div className="row services">
      {fakeData.map((pd) => (
        <div className="col-md-6 col-lg-4 col-sm-12 main-service-cart">
          <div className="service-cart p-3">
            <img className="w-50" src={pd.title} alt="" />

            <p>{pd.descriptor}</p>
            <Link to={`${pd?.url}`}>
              <button className="btn btn-primary">{pd.buttonTitle}</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCart;
