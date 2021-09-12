import React, { useState } from "react";

const FitnessCalculator = () => {
  const [height, setHeight] = useState("");
  const [wt, setWt] = useState("");
  const [bmiRes, setBmiRes] = useState(null);
  const [status, setStatus] = useState("");

  const calBMI = () => {
    let bmi = Number(wt / (((height / 100) * height) / 100)).toFixed(2);
    setBmiRes(bmi);

    let bmistatus = getStatus(bmi);
    setStatus(bmistatus);

    setHeight("");
    setWt("");
  };

  const getStatus = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  };

  const htEvent = (event) => {
    setHeight(event.target.value);
  };

  const wtEvent = (event) => {
    setWt(event.target.value);
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
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
      {bmiRes && (
        <div className="container">
          <p>Your BMI is: {bmiRes} </p>
          <p>You are currently: {status}</p>
        </div>
      )}
      <button type="button" class="btn btn-primary" onClick={calBMI}>
        Calculate
      </button>
      
    </div>
  );
};

export default FitnessCalculator;
