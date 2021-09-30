import React from "react";
import FitnessCalcNav from "./FitnessCalcNav";
import Bmi from "./fitnessCalculator/Bmi";

const FitnessCalculator = () => {
  return (
    <>
      <div className="temp">
        <FitnessCalcNav />
      </div>
      <Bmi />
    </>
  );
};

export default FitnessCalculator;
