import React from "react";
import "./BloodDoner.css";

const BloodDoner = () => {
  const fakeData = [
    {
      name: "hero alom",
      phone: "012488",
      bloodGroup: "A+",
      gender: "male",
      smoke: "no smoke",
      lastDate: "01-02-2021",
      facebook: "https//www.facebook.com",
    },
    {
      name: "hero alom",
      phone: "012488",
      bloodGroup: "A+",
      gender: "male",
      smoke: "no smoke",
      lastDate: "01-02-2021",
      facebook: "https//www.facebook.com",
    },
    {
      name: "hero alom",
      phone: "012488",
      bloodGroup: "A+",
      gender: "male",
      smoke: "no smoke",
      lastDate: "01-02-2021",
      facebook: "https//www.facebook.com",
    },
  ];
  return (
    <div>
      <div className="blood-donar-container align-items-center justify-content-center">
        <div className="blood-donar row  d-flex ">
          {fakeData.map((pd) => (
            <div className="col-md-12 col-lg-4 col-sm-12">
              <div className="donar ">
                <div className="donar-image">
                  <img
                    className="w-50 p-3"
                    src="https://i.ibb.co/k0t13qn/53176.png"
                    alt=""
                  />
                </div>
                <p>
                  Blood Group: <b className="blood-group">A+</b>
                </p>
                <p>Name: hero</p>
                <p>Gender: male</p>
                <p>Smoke: No Smoke</p>
                <h4>01254878</h4>
                <button className="donar-btn mt-2">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloodDoner;
