import React, { useState } from "react";
import "./DoctorsStatus.css";

const DoctorsStatus = () => {
  const [status, setStatus] = useState("");
  const email = sessionStorage.getItem("email");
  const handleEditSubmit = () => {
    fetch(
      `https://radiant-falls-78336.herokuapp.com/updateDoctorStatus/${email}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
        }
      });
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  console.log(status);
  console.log(new Date());

  return (
    <div>
      <div className="status-container text-center mt-5">
        <div className="container  text-center p-3">
          <select onChange={handleStatus} className="pending p-3 w-25 ">
            <option defaultValue="online">online</option>
            <option defaultValue="offline">offline</option>
          </select>
          <br />
          <button onClick={handleEditSubmit} className=" submit-btn">
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsStatus;
