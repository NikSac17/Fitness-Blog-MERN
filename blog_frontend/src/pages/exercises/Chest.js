import React from "react";
import img1 from "../images/bench_press.gif";
import img2 from "../images/decline_pushups.gif";
import img3 from "../images/neutralgrip_dumbbellpress.gif";
import img4 from "../images/incline_bench_dumbbell_flys.gif";
import img5 from "../images/incline_benchpress.gif";

const Chest = () => {
  return (
    <div className="container mx-10">
      <div className="blog-post">
        <h2 className="blog-post-title">
          This Section consists exercises for particular Muscle Groups
        </h2>
        <h2>Chest</h2>

        <p>Below are shown some of the chest exercises.</p>
        <hr />
        <h4>Bench Press</h4>
        <img className="img-fluid" src={img1} alt="" />
        <h4>Declined Pushups</h4>
        <img className="img-fluid" src={img2} alt="" />
        <h4>Neutral Grip Dumbbell Press</h4>
        <img className="img-fluid" src={img3} alt="" />
        <h4>Inclined Bench Dumbbell Fly</h4>
        <img className="img-fluid" src={img4} alt="" />
        <h4>Inclined Bench Press</h4>
        <img className="img-fluid" src={img5} alt="" />
      </div>
    </div>
  );
};

export default Chest;
