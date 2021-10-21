import React, { useEffect, useState } from "react";
import "./AllCategory.css";
import Footer from "./../Home/Footer/Footer";
import { Link } from "react-router-dom";

const AllCategory = () => {
  const [problems, setProblmes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allCategory")
      .then((response) => response.json())
      .then((result) => setProblmes(result));
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-success">
          আপনার সমস্যা টি এখন থেকে নির্বাচন করুন{" "}
        </h1>
        <div className="row  mt-5 d-flex align-items-center justify-content-center">
          {problems.map((problem) => (
            <div
              key={problem._id}
              className="col-md-4 col-lg-3 col-sm-12   p-3"
            >
              <Link
                to={`/activeDoctor/${problem.category}`}
                className="problems "
              >
                <div className="">
                  <div className="problem text-center text-white">
                    <h5>{problem.category}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllCategory;
