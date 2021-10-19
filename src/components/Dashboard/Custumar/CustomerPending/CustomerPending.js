import React, { useContext, useEffect, useState } from "react";
import { userContext } from "./../../../../App";
import "./CustomerPending.css";

const CustomerPending = ({ status }) => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [appointments, setAppointments] = useState([]);
  const email = sessionStorage.getItem("email");
  console.log(appointments);

  useEffect(() => {
    fetch(
      `https://radiant-falls-78336.herokuapp.com/customerPendingAppointments/${status}/${email}`
    )
      .then((res) => res.json())
      .then((result) => setAppointments(result));
  }, [email]);

  const lastItem = appointments[appointments.length - 1];
  console.log(lastItem);
  return (
    <div>
      <h1 className="cutomers-length mt-3">
        Total Pending Appointments{" "}
        <span className="text-danger">{appointments.length}</span>
      </h1>
      {status === "approved" && (
        <div>
          {lastItem?.meetLink && (
            <marquee
              className="text-danger headline mt-4"
              width="80%"
              direction="left"
              height="100px"
            >
              Hey You Got Doctor Appointment in Google Meet Link in below
            </marquee>
          )}
          <div>
            <button className="btn btn-info">
              <a target="_blank" href={lastItem?.meetLink}>
                Join Meet now
              </a>
            </button>
          </div>
          <p className="mt-3 bg-warning">
            Meet Link :{" "}
            <a target="_blank" href={lastItem?.meetLink}>
              {lastItem?.meetLink}
            </a>
          </p>
        </div>
      )}

      {/* <a href={}></a> */}
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
    </div>
  );
};

export default CustomerPending;
