import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ApporvedAppointments.css";

import { useForm } from "react-hook-form";
import { userContext } from "./../../../../App";
import useDelete from "../../../Hook/useDelete";

const ApporvedAppointments = () => {
  const { handleDeleteAppointment, AppointmentDelete } = useDelete();
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  const [appointments, setAppointments] = useState([]);
  const [dependencies, setDependencies] = useState(false);
  const [apointments, setApointments] = useState([]);
  const [meetLink, setMeetLink] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/allAppointments/${"approved"}`)
      .then((res) => res.json())
      .then((result) => setAppointments(result));
  }, [AppointmentDelete, dependencies]);

  const doctorEmail = sessionStorage.getItem("email");

  let count = 0;

  const [optionValue, SetOptionValue] = useState("pending");
  const handleSelectValue = (e) => {
    SetOptionValue(e.target.value);
  };
  const handleMeetLink = (e) => {
    setMeetLink(e.target.value);
  };

  const handleEditSubmit = (id) => {
    fetch(`http://localhost:5000/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ optionValue, meetLink, doctorEmail }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
          setDependencies(true);
          const userInfo = { ...loggedInUser };
          userInfo.meetLink = meetLink;
          setLoggedInUser(userInfo);
        }
      });
    console.log(id);
  };
  return (
    <div>
      <h1>ALl Pending Appointments {appointments.length}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Meet Link</th>
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
              <td>
                <input
                  onChange={handleMeetLink}
                  className="p-2"
                  type="text"
                  defaultValue={`${pd?.meetLink} || `}
                  placeholder={`Live link`}
                />
              </td>
              <td className=" problme-details">{pd?.problem}</td>
              <td>
                <form>
                  <select onChange={handleSelectValue} className="pending p-2 ">
                    <option defaultValue={pd?.status}>{pd.status}</option>
                    <option defaultValue="approved">approved</option>
                    <option defaultValue="processing">processing</option>
                    <option defaultValue="done">done</option>
                    <option defaultValue="done">pending</option>
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
      <ul></ul>
    </div>
  );
};

export default ApporvedAppointments;
