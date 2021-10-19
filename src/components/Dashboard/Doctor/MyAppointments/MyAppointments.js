import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useDelete from "../../../Hook/useDelete";

const MyAppointments = () => {
  const email = sessionStorage.getItem("email");
  const { handleDeleteAppointment, AppointmentDelete } = useDelete();
  const [appointments, setAppointments] = useState([]);
  const [dependencies, setDependencies] = useState(false);
  const [meetLink, setMeetLink] = useState("");

  useEffect(() => {
    fetch(
      `https://radiant-falls-78336.herokuapp.com/myAppointments/${"approved"}/${email}`
    )
      .then((res) => res.json())
      .then((result) => setAppointments(result));
  }, [AppointmentDelete, dependencies]);
  let count = 0;
  const handleMeetLink = (e) => {
    setMeetLink(e.target.value);
  };
  const [optionValue, SetOptionValue] = useState("approved");
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
      <h1>Total Pending Appointment {appointments.length}</h1>
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
    </div>
  );
};

export default MyAppointments;
