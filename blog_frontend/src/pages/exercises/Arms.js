import React from "react";

import img1 from "../images/barbell_bicep_curl.gif";
import img2 from "../images/incline_bench_dumbbell_curls.gif";
import img3 from "../images/skull_crushers.gif";
import img4 from "../images/tricep_extension.gif";
import img5 from "../images/tricep_kickback.gif";

const Arms = () => {
  return (
    <div className="container">
      <div className="blog-post">
        <h2 className="blog-post-title">
          This Section consists exercises for particular Muscle Groups
        </h2>
        <h2>Arms</h2>

        <p>Below are shown some of the arms exercises.</p>
        <hr />
        <h4>Barbell Bicep Curl</h4>
        <img className="img-fluid" src={img1} alt="" />
        <h4>Incline Bench Dumbbell Curls</h4>
        <img className="img-fluid" src={img2} alt="" />
        <h4>Skull Crushers</h4>
        <img className="img-fluid" src={img3} alt="" />
        <h4>Tricep Extension</h4>
        <img className="img-fluid" src={img4} alt="" />
        <h4>Tricep Kickback</h4>
        <img className="img-fluid" src={img5} alt="" />
      </div>
    </div>
  );
};

export default Arms;
