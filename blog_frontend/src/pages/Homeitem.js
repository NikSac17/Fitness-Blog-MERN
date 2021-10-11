import React from "react";
import { Link } from "react-router-dom";

const Homeitem = ({ imgUrl1, imgUrl2, heading, description, date, points }) => {
  return (
    <div className="container col-md-5 my-3">
      <div className="row mb-2">
        <div>
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">{heading}</h3>
              <p className="card-text mb-auto">
                {description[0].substring(0, 90)}...
              </p>
              <Link
                to={{
                  pathname: "/articlePage",
                  state: { imgUrl2, heading, description, date, points },
                }}
              >
                continue reading...
              </Link>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width="200"
                height="250"
                src={imgUrl1}
                alt="Loading Soon..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeitem;
