import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import { useForm } from "react-hook-form";
import useDelete from "../../Hook/useDelete";
import { userContext } from "./../../../App";

const DoneAppointments = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [appointments, setAppointments] = useState([]);
  const [dependencies, setDependencies] = useState(false);
  const [apointments, setApointments] = useState([]);
  const { handleDeleteAppointment, AppointmentDelete } = useDelete();
  const doctorEmail = sessionStorage.getItem("email");

  let count = 0;

  const [optionValue, SetOptionValue] = useState(null);
  const handleSelectValue = (e) => {
    SetOptionValue(e.target.value);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/allAppointments/${"done"}`)
      .then((res) => res.json())
      .then((result) => setAppointments(result));
  }, [AppointmentDelete]);
  const handleEditSubmit = (id) => {
    fetch(`http://localhost:5000/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ optionValue, doctorEmail }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
          setDependencies(true);
          const userInfo = { ...loggedInUser };

          setLoggedInUser(userInfo);
        }
      });
    console.log(id);
  };

  return (
    <div>
      <h1>All Done APpointments {appointments.length}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>

            <th>problem Details</th>
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

              <td className=" problme-details">{pd?.problem}</td>
              <td>
                <form>
                  <select onChange={handleSelectValue} className="pending p-2 ">
                    <option defaultValue={pd?.status}>{pd.status}</option>
                    <option defaultValue="approved">approved</option>
                    <option defaultValue="processing">processing</option>
                    <option defaultValue="done">done</option>
                  </select>
                  <input className="hideInput d-none" type="text" name="id" />
                </form>
              </td>
              <button
                onClick={() => handleEditSubmit(pd?._id)}
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
    </div>
  );
};

export default DoneAppointments;
