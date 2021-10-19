import React, { useEffect, useState } from "react";
import "./BloodDoner.css";
import useUser from "./../Hook/useUser";

const BloodDoner = () => {
  const email = sessionStorage.getItem("email");

  // const { allDonar, donar } = useUser();
  // console.log(donar);
  const [donar, setDoner] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allDonar`)
      .then((res) => res.json())
      .then((result) => setDoner(result));
  }, [email]);
  // console.log(donar);
  return (
    <div>
      <div className="blood-donar-container align-items-center justify-content-center">
        <div className="blood-donar row  d-flex ">
          {donar?.map((pd) => (
            <div className="col-md-12 col-lg-4 col-sm-12">
              <div className="donar ">
                <div className="donar-image">
                  <img
                    className="w-50 p-3"
                    src="https://i.ibb.co/k0t13qn/53176.png"
                    alt=""
                  />
                </div>
                <p>
                  Blood Group: <b className="blood-group">{pd.bloodGroup}</b>
                </p>
                <p>Name: {pd.name}</p>
                <p>Gender: {pd.gender}</p>
                <p>Smoke: {pd.Smoke}</p>
                <h4>{pd.phone}</h4>
                <button className="donar-btn mt-2">Details</button>
                <br />
                <button className="btn btn-danger mt-2">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloodDoner;
