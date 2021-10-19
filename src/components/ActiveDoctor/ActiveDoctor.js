import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./ActiveDoctor.css";
import { userContext } from "./../../App";
import { Card, Button } from "react-bootstrap";

const ActiveDoctor = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const { issue } = useParams();
  const [doctors, setDoctors] = useState([]);
  const status = "online";

  useEffect(() => {
    fetch(
      `https://radiant-falls-78336.herokuapp.com/activeDoctors/${issue}/${status}`
    )
      .then((response) => response.json())
      .then((result) => setDoctors(result));
  }, []);
  console.log(doctors);

  const handleActiveDoctor = (email) => {
    const userInfo = { ...loggedInUser };
    userInfo.doctorEmail = email;
    setLoggedInUser(userInfo);
    history.push(`/processPayment/${email}`);
  };

  return (
    <div className="container">
      <h1>Total Active Doctors {doctors.length}</h1>
      <div className="active-doctor-container">
        <div className="activeDoctors">
          <div className="row">
            {doctors.map((doctor) => (
              <div key={doctor._id} className="col-lg-4 col-md-6 col-sm-12">
                <Card className="border border" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={doctor.imageURL} />
                  <Card.Body>
                    <Card.Title>{doctor.name}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <button
                      onClick={() => handleActiveDoctor(doctor.email)}
                      className="btn btn-info p-2 mt-3 mb-3"
                    >
                      Get Appointment
                    </button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveDoctor;
