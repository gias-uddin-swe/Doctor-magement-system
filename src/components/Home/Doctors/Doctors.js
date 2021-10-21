import React, { useEffect, useState } from "react";
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
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allDoctors")
      .then((response) => response.json())
      .then((result) => {
        setDoctors(result.slice(0, 7));
      });
  }, []);

  return (
    <div className="container allDoctors">
      <h1 className="ourDoctors">Our Doctors</h1>
      <div className="row">
        {doctors.map((pd) => (
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="doctor">
              <div className="doctor-image">
                <img src={pd.imageURL} alt="" />
              </div>
              <h6 className="mt-4">Name:{pd.name}</h6>
              <h6>Chamber:{pd.chamber}</h6>
              <p>Phone:{pd.phone}</p>
              <p>gender:{pd.gender}</p>
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
