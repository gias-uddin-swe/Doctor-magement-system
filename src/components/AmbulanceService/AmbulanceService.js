import React from "react";
import Footer from "../Home/Footer/Footer";
import "./AmbulanceService.css";
const AmbulanceService = () => {
  const fakeData = [
    {
      name: "AM-K05 (AC)",
      driverName: "malek bhai",
      phone: "01254875",
      price: "12$/hr",
      image:
        "https://i.ibb.co/KK7nr6x/imgbin-ambulance-Mv4n-Tc-Tk0b2m-L7-Nui2t-Ghu0-Db-removebg-preview.png",
      age: "36",
    },
    {
      name: "AM-K05 (AC)",
      driverName: "malek bhai",
      phone: "01254875",
      price: "12$/hr",
      image:
        "https://i.ibb.co/KK7nr6x/imgbin-ambulance-Mv4n-Tc-Tk0b2m-L7-Nui2t-Ghu0-Db-removebg-preview.png",
      age: "36",
    },
    {
      name: "AM-K05 (AC)",
      driverName: "malek bhai",
      phone: "01254875",
      price: "12$/hr",
      image:
        "https://i.ibb.co/KK7nr6x/imgbin-ambulance-Mv4n-Tc-Tk0b2m-L7-Nui2t-Ghu0-Db-removebg-preview.png",
      age: "36",
    },
    {
      name: "AM-K05 (AC)",
      driverName: "malek bhai",
      phone: "01254875",
      price: "12$/hr",
      image:
        "https://i.ibb.co/KK7nr6x/imgbin-ambulance-Mv4n-Tc-Tk0b2m-L7-Nui2t-Ghu0-Db-removebg-preview.png",
      age: "36",
    },
    {
      name: "AM-K05 (AC)",
      driverName: "malek bhai",
      phone: "01254875",
      price: "12$/hr",
      image:
        "https://i.ibb.co/KK7nr6x/imgbin-ambulance-Mv4n-Tc-Tk0b2m-L7-Nui2t-Ghu0-Db-removebg-preview.png",
      age: "36",
    },
    {
      name: "AM-K05 (AC)",
      driverName: "malek bhai",
      phone: "01254875",
      price: "12$/hr",
      image:
        "https://i.ibb.co/KK7nr6x/imgbin-ambulance-Mv4n-Tc-Tk0b2m-L7-Nui2t-Ghu0-Db-removebg-preview.png",
      age: "36",
    },
    {
      name: "AM-K05 (AC)",
      driverName: "malek bhai",
      phone: "01254875",
      price: "12$/hr",
      image:
        "https://i.ibb.co/KK7nr6x/imgbin-ambulance-Mv4n-Tc-Tk0b2m-L7-Nui2t-Ghu0-Db-removebg-preview.png",
      age: "36",
    },
    {
      name: "AM-K05 (AC)",
      driverName: "malek bhai",
      phone: "01254875",
      price: "12$/hr",
      image:
        "https://i.ibb.co/KK7nr6x/imgbin-ambulance-Mv4n-Tc-Tk0b2m-L7-Nui2t-Ghu0-Db-removebg-preview.png",
      age: "36",
    },
    {
      name: "AM-K05 (AC)",
      driverName: "malek bhai",
      phone: "01254875",
      price: "12$/hr",
      image:
        "https://i.ibb.co/KK7nr6x/imgbin-ambulance-Mv4n-Tc-Tk0b2m-L7-Nui2t-Ghu0-Db-removebg-preview.png",
      age: "36",
    },
  ];
  return (
    <div>
      <h1>Hello world</h1>
      <div className="ambulance-service-a container">
        <div className="ambulances">
          <div className="row">
            {fakeData.map((pd) => (
              <div className="col-md-4">
                <div className="ambulance">
                  <div className="ambulance-image">
                    <img className="w-50" src={pd.image} alt="" />
                  </div>
                  <div className="d-flex d-flex align-items-center justify-content-center">
                    <div className="info p-3">
                      <h6>Model: {pd.name}</h6>
                      <p>price: {pd.price}</p>
                    </div>
                    <div className="right-info p-3">
                      <h6>Driver: {pd.driverName}</h6>
                      <p>Age: {pd.age}</p>
                    </div>
                  </div>
                  <h4 className="text-warning p-3">{pd.phone}</h4>
                  <button className="btn btn-danger p-2">Get Service</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AmbulanceService;
