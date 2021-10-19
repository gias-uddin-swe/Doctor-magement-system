import React, { useEffect, useState } from "react";
import "./AppointmentsList.css";
import { Table } from "react-bootstrap";

import { useForm } from "react-hook-form";
import useDelete from "./../../Hook/useDelete";

const AppointmentsList = () => {
  const { handleDeleteAppointment, AppointmentDelete } = useDelete();
  const [appointments, setAppointments] = useState([]);
  const [dependencies, setDependencies] = useState(false);
  const [apointments, setApointments] = useState([]);

  useEffect(() => {
    fetch(
      `https://radiant-falls-78336.herokuapp.com/allAppointments/${"pending"}`
    )
      .then((res) => res.json())
      .then((result) => setAppointments(result));
  }, [AppointmentDelete, dependencies]);

  let count = 0;

  const [optionValue, SetOptionValue] = useState("pending");
  const handleSelectValue = (e) => {
    SetOptionValue(e.target.value);
  };
  console.log(optionValue);

  const handleEditSubmit = (id) => {
    fetch(`https://radiant-falls-78336.herokuapp.com/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ optionValue }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
          setDependencies(true);
        }
      });
    console.log(id);
  };
  return (
    <div>
      <h1>ALl Appointments {appointments.length}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Problem</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {appointments.map((pd) => (
          <tbody>
            <tr>
              <td>{(count = count + 1)}</td>
              <td>{pd.name}</td>
              <td>{pd.customerPhone}</td>
              <td>{pd.issue}</td>
              <td>
                <form>
                  <select onChange={handleSelectValue} className="pending p-2 ">
                    <option defaultValue={pd.status}>{pd.status}</option>
                    <option defaultValue="approved">approved</option>
                    <option defaultValue="pending">pending</option>
                  </select>
                  <input className="hideInput d-none" type="text" name="id" />
                </form>
              </td>
              <button
                onClick={() => handleEditSubmit(pd._id)}
                className="btn bg-info me-3"
              >
                Update
              </button>
              <button
                onClick={() =>
                  handleDeleteAppointment("deletePendingAppointments", pd._id)
                }
                className="btn p-2 bg-danger "
              >
                Delete
              </button>
            </tr>
          </tbody>
        ))}
      </Table>
      <ul></ul>
    </div>
  );
};

export default AppointmentsList;
