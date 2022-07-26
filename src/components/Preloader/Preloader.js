import React from "react";
import { useState } from "react";
import "./Preloader.css";
// import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const Preloader = () => {
  let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("green");
    // const email = sessionStorage.setItem("email", result.user.email);
    
    // const email= sessionStorage.getItem("email");
    
  //   const override = css`
  //     display: block;
  //     margin: 0 auto;
  //     border-color: red;
  //   `;
  return (
    <div>
      <div className="sweet-loading">
        <HashLoader color={color} loading={loading} size={200} />
      </div>
    </div>
  );
};

export default Preloader;
