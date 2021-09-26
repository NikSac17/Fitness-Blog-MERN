import React from "react";

import img1 from "../images/dumbbell_shoulder_press.gif";
import img2 from "../images/overhead_press.gif";
import img3 from "../images/arnold_press.gif";
import img4 from "../images/lateral_raises.gif";
import img5 from "../images/dumbbell_shrugs.gif";

const Shoulders = () => {
  return (
    <div className="container">
      <div className="blog-post">
        <h2 className="blog-post-title">
          This Section consists exercises for particular Muscle Groups
        </h2>
        <h2>Shoulder</h2>

        <p>Below are shown some of the shoulder exercises.</p>
        <hr />
        <h4>Dumbbell Shoulder Press</h4>
        <img className="img-fluid" src={img1} alt="" />
        <h4>Overhead Press</h4>
        <img className="img-fluid" src={img2} alt="" />
        <h4>Arnold Press</h4>
        <img className="img-fluid" src={img3} alt="" />
        <h4>Lateral Raises</h4>
        <img className="img-fluid" src={img4} alt="" />
        <h4>Dumbbell Shrugs</h4>
        <img className="img-fluid" src={img5} alt="" />
      </div>
    </div>
  );
};

export default Shoulders;
