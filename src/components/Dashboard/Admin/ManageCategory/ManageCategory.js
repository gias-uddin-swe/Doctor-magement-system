import React, { useState } from "react";
import "./ManageCategory.css";
import { useForm } from "react-hook-form";

const ManageCategory = () => {
  const [category, setCategory] = useState("");

  const handelSubmitCategory = () => {
    fetch("http://localhost:5000/setCategory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  const handleSelectValue = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div>
      <div className="set-category">
        <div className="categorys">
          <div className="form mt-5">
            <select onChange={handleSelectValue} className="pending p-3 ">
              <option defaultValue="Cardiologist">Cardiologist</option>
              <option defaultValue="Allergists">Allergists</option>
              <option defaultValue="Dermatologists">Dermatologists</option>
              <option defaultValue="Ophthalmologists">Ophthalmologists</option>
              <option defaultValue="Endocrinologists">Endocrinologists</option>
              <option defaultValue="Nephrologists">Nephrologists</option>
              <option defaultValue="Urologists">Urologists</option>
              <option defaultValue="Pulmonologists">Pulmonologists</option>
              <option defaultValue="Radiologists">Radiologists</option>
            </select>
            <br />
            <button onClick={handelSubmitCategory} className="submit-btn">
              Set Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCategory;
