import React from "react";
import { Link } from "react-router-dom";

const FitnessCalcNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/bmi">
                  BMI Calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bmr">
                  BMR Calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fat">
                  Body Fat Percentage
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
