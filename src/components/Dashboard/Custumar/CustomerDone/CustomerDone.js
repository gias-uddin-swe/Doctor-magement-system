import React, { useContext, useEffect, useState } from "react";
import { userContext } from "./../../../../App";
import "./CustomerDone.css";

const CustomerDone = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [appointments, setAppointments] = useState([]);
  const email = sessionStorage.getItem("email");
  console.log(appointments);

  useEffect(() => {
    fetch(
      `http://localhost:5000/customerPendingAppointments/${"done"}/${email}`
    )
      .then((res) => res.json())
      .then((result) => setAppointments(result));
  }, [email]);

  return (
    <div>
      <h1 className="cutomers-length mt-3">
        Total Done Appointments{" "}
        <span className="text-danger">{appointments.length}</span>
      </h1>

      <div className="customer-appintments mt-3">
        <div className="row">
          {appointments?.map((pd) => (
            <div key={pd._id} className="col-md-6 col-lg-4 col-sm-12">
              <div className="cart-box">
                <h5>{pd?.name}</h5>
                <h6>Problem: {pd?.problem}</h6>
                <h4>
                  Status: <mark>{pd?.status}</mark>
                </h4>
                <h6>Doctor Name: </h6>
                <button className="btn btn-info m-2 p-1">
                  Doctors Details
                </button>
                <br />
                <button className="btn btn-danger m-2 p-1">
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <marquee
        className="text-danger "
        width="60%"
        direction="left"
        height="100px"
      >
        This is a sample scrolling text that has scrolls texts to down.
      </marquee> */}
    </div>
  );
};

export default CustomerDone;
