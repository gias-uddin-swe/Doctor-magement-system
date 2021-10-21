import React, { useEffect, useState } from "react";
import useDelete from "../../../Hook/useDelete";
import "./AllCustomer.css";

const AllCustomer = () => {
  const [customers, setCustomers] = useState([]);
  const { handleDeleteAppointment, AppointmentDelete } = useDelete();
  useEffect(() => {
    fetch("http://localhost:5000/allCustomers")
      .then((response) => response.json())
      .then((result) => setCustomers(result));
  }, [AppointmentDelete]);
  console.log(customers);
  return (
    <div>
      <div className="cutomers-length ">Total Customer {customers.length}</div>
      <div className="all-customer row">
        {customers.map((pd) => (
          <div className="customers col-md-4">
            <div className="custoers-box">
              <h4>Name: {pd?.name}</h4>
              <h6>problem: {pd?.issue}</h6>
              <h6>Phone: {pd?.phone}</h6>
              <h6> {pd?.email}</h6>

              <button className="btn btn-info p-2 m-2">Edit info</button>
              <button
                onClick={() => handleDeleteAppointment("deletePatient", pd._id)}
                className="btn btn-danger p-2 m-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCustomer;
