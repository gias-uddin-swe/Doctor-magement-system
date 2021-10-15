import React, { useEffect, useState } from "react";
import useDelete from "../../../Hook/useDelete";
import "./MyDoneAppointment.css";
import { Table } from "react-bootstrap";

const MyDoneAppointment = () => {
  const email = sessionStorage.getItem("email");
  const { handleDeleteAppointment, AppointmentDelete } = useDelete();
  const [appointments, setAppointments] = useState([]);
  const [dependencies, setDependencies] = useState(false);
  const [apointments, setApointments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myAppointments/${"done"}/${email}`)
      .then((res) => res.json())
      .then((result) => setAppointments(result));
  }, [AppointmentDelete, dependencies]);

  let count = 0;

  const [optionValue, SetOptionValue] = useState(null);
  const handleSelectValue = (e) => {
    SetOptionValue(e.target.value);
  };
  console.log(optionValue);

  const handleEditSubmit = (id) => {
    fetch(`http://localhost:5000/updateStatus/${id}`, {
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
      <h1>Total Done Appointment {apointments.length}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Problem</th>
            <th>D.Email</th>
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
              <td>{"sdkfhi"}</td>
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
    </div>
  );
};

export default MyDoneAppointment;
