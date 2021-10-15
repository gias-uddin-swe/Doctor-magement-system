// import React from "react";
// import { Carousel } from "react-bootstrap";
// import doctor1 from "../../../images/doctor/dcotor1.png";
// import doctor2 from "../../../images/doctor/doctor2.png";
// import doctor3 from "../../../images/doctor/doctor4.jpg";
// import "./DoctorCarousel.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const DoctorCarousel = () => {
  return (
    <div className="container doctor-carousel-container">
      <h1 className="mb-5">Our Popular doctors</h1>
      <Carousel>
        <div className="d-flex justify-content-center">
          <img
            className="col-md-6"
            className="w-25"
            src="https://i.ibb.co/P5XVKY4/purepng-com-doctordoctorsdoctors-and-nursesclinicianmedical-practitionernotepadfemale-1421526857248u.png"
          />

          <div className="col-md-6 p-3 mt-5">
            <h1>Hellow world</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non
              ex aut temporibus soluta ut fuga veniam similique nesciunt
              debitis!
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <img
            className="col-md-6"
            className="w-25"
            src="https://i.ibb.co/P5XVKY4/purepng-com-doctordoctorsdoctors-and-nursesclinicianmedical-practitionernotepadfemale-1421526857248u.png"
          />

          <div className="col-md-6 p-3 mt-5">
            <h1>Hellow world</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non
              ex aut temporibus soluta ut fuga veniam similique nesciunt
              debitis!
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <img
            className="col-md-6"
            className="w-25"
            src="https://i.ibb.co/P5XVKY4/purepng-com-doctordoctorsdoctors-and-nursesclinicianmedical-practitionernotepadfemale-1421526857248u.png"
          />

          <div className="col-md-6 p-3 mt-5">
            <h1>Hellow world</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non
              ex aut temporibus soluta ut fuga veniam similique nesciunt
              debitis!
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default DoctorCarousel;
