import React, { useEffect } from "react";
import "./AllCategory.css";
import Footer from "./../Home/Footer/Footer";
import { Link } from "react-router-dom";

const AllCategory = () => {
  const problems = [
    {
      title: "হৃদরোগ  সমস্যা",
    },
    {
      title: "হৃদরোগ  সমস্যা",
    },
    {
      title: "হৃদরোগ  সমস্যা",
    },
    {
      title: "হৃদরোগ  সমস্যা",
    },
    {
      title: "হৃদরোগ  সমস্যা",
    },
    {
      title: "হৃদরোগ  সমস্যা",
    },
  ];
  const handleCategory = () => {};
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-success">
          আপনার সমস্যা টি এখন থেকে নির্বাচন করুন{" "}
        </h1>
        <div className="row  mt-5 d-flex align-items-center justify-content-center">
          {problems.map((problem) => (
            <div className="col-md-4 col-lg-3 col-sm-12   p-3">
              <Link
                to={`/appointmentArea/${problem.title}`}
                className="problems "
              >
                <div className="">
                  <div className="problem text-center text-white">
                    <h4>{problem.title}</h4>
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
