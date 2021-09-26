import React from "react";
import img1 from "../images/bentover_row.gif";
import img2 from "../images/deadlift.gif";
import img3 from "../images/onehand_tbar_row.gif";
import img4 from "../images/onearm_dumbbell_row.gif";
import img5 from "../images/incline_bench_row.gif";

const Back = () => {
  return (
    <div className="container">
      <div className="blog-post">
        <h2 className="blog-post-title">
          This Section consists exercises for particular Muscle Groups
        </h2>
        <h2>Back</h2>

        <p>Below are shown some of the back exercises.</p>
        <hr />
        <h4>Bent Over Row</h4>
        <img className="img-fluid" src={img1} alt="" />
        <h4>Deadlifts</h4>
        <img className="img-fluid" src={img2} alt="" />
        <h4>One Hand T-Bar Row</h4>
        <img className="img-fluid" src={img3} alt="" />
        <h4>One Arm Dumbbell Row</h4>
        <img className="img-fluid" src={img4} alt="" />
        <h4>Incline Bench Row</h4>
        <img className="img-fluid" src={img5} alt="" />
      </div>
    </div>
  );
};

export default Back;
