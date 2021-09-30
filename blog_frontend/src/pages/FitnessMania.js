import React from "react";
import img1 from "./images/myfit.jpeg";
import "./css/FitnessMania.css";

const FitnessMania = () => {
  return (
    <div>
      <img src={img1} className="fitnessmania-image" alt="Snow"/>
      <p className="fitnessmania-heading">Welcome to FitnessMania</p>
    </div>
  );
};

export default FitnessMania;
