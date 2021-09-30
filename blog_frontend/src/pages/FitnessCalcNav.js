import React from "react";
import { Link } from "react-router-dom";

const FitnessCalcNav = () => {
  return (
    <div className="container margin-nav-left">
      <nav className="navbar navbar-expand-lg navbar-light fitness-nav-font">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/bmi">
                  <button className="btn">BMI Calculator</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bmr">
                <button className="btn">BMR Calculator</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fat">
                <button className="btn">Body Fat Percentage</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FitnessCalcNav;
