import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./css/NavBar.css";

const NavBar = () => {
  let location = useLocation();
  let history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/fitnessmania">
          FitnessMania
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Explore
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/exercises">
                    Exercises
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/articles">
                    Articles
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fitnesscalculator">
                FitnessCalculator
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notes">
                Scehdule Your Workout
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form>
              <Link className="btn btn-primary" role="button" to="/login">
                Login
              </Link>
              <Link className="btn btn-primary mx-2" role="button" to="/signup">
                Signup
              </Link>
            </form>
          ) : (
            <form>
              <button onClick={handleLogout} className="btn btn-primary">
                Logout
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
