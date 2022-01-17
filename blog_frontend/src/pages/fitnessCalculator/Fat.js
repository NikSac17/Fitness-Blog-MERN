import React, { useState } from "react";
import FitnessCalcNav from "../FitnessCalcNav";
import img from "../images/fat.jpeg";

const Fat = () => {
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [ht, setHt] = useState("");
  const [fatRes, setFatRes] = useState(null);

  const waistEvent = (event) => {
    setWaist(event.target.value);
  };

  const neckEvent = (event) => {
    setNeck(event.target.value);
  };

  const htEvent = (event) => {
    setHt(event.target.value);
  };

  const calFAT = () => {
    let fat = Number(
      495 /
        (1.0324 -
          0.19077 * (Math.log(waist - neck) / Math.log(10)) +
          0.15456 * (Math.log(ht) / Math.log(10))) -
        450
    ).toFixed(2);
    setFatRes(fat);
  };

  return (
    <>
      <img src={img} className="bmi-image" alt="Snow" />
      <div className="temp">
        <FitnessCalcNav />
        <h1>Fat Percentage Calculator</h1>
        <div className="mb-3 form-group w-25 calculator">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Waist in cm
          </label>
          <input
            type="number"
            value={waist}
            onChange={waistEvent}
            placeholder="Waist in cm"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3 form-group w-25 calculator">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Neck in cm
          </label>
          <input
            type="number"
            value={neck}
            onChange={neckEvent}
            className="form-control"
            placeholder="Neck in cm"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3 form-group w-25 calculator">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Height in cm
          </label>
          <input
            type="number"
            value={ht}
            onChange={htEvent}
            className="form-control"
            placeholder="Height in cm"
            id="exampleFormControlInput1"
          />
        </div>

        {fatRes && (
          <div className="container">
            <p>Fat % is {fatRes}.</p>
          </div>
        )}
        <button type="button" className="btn btn-primary" onClick={calFAT}>
          Calculate
        </button>
      </div>
    </>
  );
};

export default Fat;
