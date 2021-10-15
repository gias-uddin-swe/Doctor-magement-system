import React from "react";
import "./Doctors.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Doctors = () => {
  const fakeData = [
    {
      name: "Jmes leo",
      role: "cardiologist",
      available: "monday-friday",
      phone: "0174514245",
      chamber: "pabna",
      youtube: "https://www.youtube.com",
      email: "test@gmail.com",
      instagram: "https://www.instagram.com",
      facebook: "https://www.facebook.com",
      image: "https://i.ibb.co/5sXbTNX/Doctor-162.jpg",
    },
    {
      name: "Jmes leo",
      role: "cardiologist",
      available: "monday-friday",
      phone: "0174514245",
      chamber: "pabna",
      youtube: "https://www.youtube.com",
      email: "test@gmail.com",
      instagram: "https://www.instagram.com",
      facebook: "https://www.facebook.com",
      image: "https://i.ibb.co/5sXbTNX/Doctor-162.jpg",
    },
    {
      name: "Jmes leo",
      role: "cardiologist",
      available: "monday-friday",
      phone: "0174514245",
      chamber: "pabna",
      email: "test@gmail.com",
      instagram: "https://www.instagram.com",
      facebook: "https://www.facebook.com",
      youtube: "https://www.youtube.com",
      image: "https://i.ibb.co/5sXbTNX/Doctor-162.jpg",
    },
  ];

  return (
    <div className="container allDoctors">
      <h1 className="ourDoctors">Our Doctors</h1>
      <div className="row">
        {fakeData.map((pd) => (
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="doctor">
              <div className="doctor-image">
                <img src="https://i.ibb.co/5sXbTNX/Doctor-162.jpg" alt="" />
              </div>
              <h6 className="mt-4">Name:{pd.name}</h6>
              <h6>Experts: {pd.role}</h6>
              <h6>Chamber:{pd.chamber}</h6>
              <p>Phone:{pd.phone}</p>
              <button className="btn btn-danger">Details</button>
              <div className="doctor-icon mt-3">
                <p>
                  <span>
                    <a href={pd.facebook}>
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </span>
                  <span>
                    <a href={pd.instagram}>
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </span>
                  <span>
                    <a href={pd.youtube}>
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
