import React, { useState } from "react";
import FitnessCalcNav from "../FitnessCalcNav";

const Bmr = () => {
  const [wt, setWt] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [bmrRes, setBmrRes] = useState(null);

  const wtEvent = (event) => {
    setWt(event.target.value);
  };

  const htEvent = (event) => {
    setHeight(event.target.value);
  };

  const ageEvent = (event) => {
    setAge(event.target.value);
  };

  const calBMR = () => {
    let bmr = Number(66.4730 + (13.7516 * wt) + (5.0033 * height) - (6.7550 * age)).toFixed(2);
    setBmrRes(bmr);
  };

  return (
    <div className="container">
      <FitnessCalcNav />
      <h1>BMR Calculator</h1>
      <div className="mb-3 form-group w-25">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Weight
        </label>
        <input
          type="number"
          value={wt}
          onChange={wtEvent}
          placeholder="Weight in kg"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3 form-group w-25">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Height
        </label>
        <input
          type="number"
          value={height}
          onChange={htEvent}
          className="form-control"
          placeholder="Height in cm"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3 form-group w-25">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Age
        </label>
        <input
          type="number"
          value={age}
          onChange={ageEvent}
          className="form-control"
          placeholder="Age in years"
          id="exampleFormControlInput1"
        />
      </div>
      {bmrRes && (
        <div className="container">
          <p>Your BMI is: {bmrRes} Calories/day.</p>
        </div>
      )}
      <button type="button" className="btn btn-primary" onClick={calBMR}>
        Calculate
      </button>
    </div>
  );
};

export default Bmr;
