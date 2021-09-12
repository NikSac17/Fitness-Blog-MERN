import React from 'react';

import img1 from "../images/burpees.gif";
import img2 from "../images/squat_jump.gif";
import img3 from "../images/mountain_climbers.gif";
import img4 from "../images/rope_skipping.gif";

const Cardio = () => {
    return (
        <div className="container">
        <div className="blog-post">
            <h2 className="blog-post-title">This Section consists exercises for particular Muscle Groups</h2>
            <h2>Cardio Vascular</h2>

            <p>Below are shown some of the cardiovascular exercises.</p>
            <hr/>
            <h4>Burpees</h4>
            <img class = "img-fluid" src={img1} alt=""/>
            <h4>Squat Jump</h4>
            <img class = "img-fluid" src={img2} alt=""/>
            <h4>Mountain Climbers</h4>
            <img class = "img-fluid" src={img3} alt=""/>
            <h4>Rope Skipping</h4>
            <img class = "img-fluid" src={img4} alt=""/>
          </div>
       </div>
    )
}

export default Cardio
