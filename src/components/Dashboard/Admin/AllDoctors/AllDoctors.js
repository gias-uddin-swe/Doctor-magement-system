import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useDelete from "../../../Hook/useDelete";
import "./AllDoctors.css";
const AllDoctors = () => {
  const [doctors, setdoctors] = useState([]);
  const [dependencies, setDependencies] = useState(false);
  const [apointments, setApointments] = useState([]);
  const { handleDeleteAppointment, AppointmentDelete } = useDelete();

  useEffect(() => {
    fetch(`http://localhost:5000/allDoctors/`)
      .then((res) => res.json())
      .then((result) => setdoctors(result));
  }, [AppointmentDelete, dependencies]);

  let count = 0;

  const [optionValue, SetOptionValue] = useState(null);
  const handleSelectValue = (e) => {
    SetOptionValue(e.target.value);
  };
  console.log(optionValue);

  //   const handleEditSubmit = (id) => {
  //     fetch(`http://localhost:5000/updateStatus/${id}`, {
  //       method: "PATCH",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ optionValue }),
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         if (result) {
  //           console.log(result);
  //           setDependencies(true);
  //         }
  //       });
  //     console.log(id);
  //   };

  return (
    <div>
      <h1>ALl Appointments {doctors.length}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Working Time</th>
            <th>Specialists</th>

            <th>Action</th>
          </tr>
        </thead>
        {doctors.map((pd) => (
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
                    <option defaultValue="Cardiologist">Cardiologist</option>
                    <option defaultValue="Allergists">Allergists</option>
                    <option defaultValue="Dermatologists">
                      Dermatologists
                    </option>
                    <option defaultValue="Ophthalmologists">
                      Ophthalmologists
                    </option>
                    <option defaultValue="Endocrinologists">
                      Endocrinologists
                    </option>
                    <option defaultValue="Nephrologists">Nephrologists</option>
                    <option defaultValue="Urologists">Urologists</option>
                    <option defaultValue="Pulmonologists">
                      Pulmonologists
                    </option>
                    <option defaultValue="Radiologists">Radiologists</option>
                  </select>
                  <input className="hideInput d-none" type="text" name="id" />
                </form>
              </td>
              <button className="btn bg-info me-3">Update</button>
              <button
                onClick={() => handleDeleteAppointment("deleteDoctor", pd._id)}
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

export default AllDoctors;
