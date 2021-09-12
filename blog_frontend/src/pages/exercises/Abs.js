import React from 'react';

import img1 from "../images/side_crunches.gif";
import img2 from "../images/plank.gif";
import img3 from "../images/advanced_plank.gif";
import img4 from "../images/crunch_variation.gif";
import img5 from "../images/medball_abs_exercise.gif";

const Abs = () => {
    return (
        <div className="container">
        <div className="blog-post">
            <h2 className="blog-post-title">This Section consists exercises for particular Muscle Groups</h2>
            <h2>Abs</h2>

            <p>Below are shown some of the abs exercises.</p>
            <hr/>
            <h4>Side Crunch</h4>
            <img class = "img-fluid" src={img1} alt=""/>
            <h4>Plank</h4>
            <img class = "img-fluid" src={img2} alt=""/>
            <h4>Advanced Plank</h4>
            <img class = "img-fluid" src={img3} alt=""/>
            <h4>Crunch Variation</h4>
            <img class = "img-fluid" src={img4} alt=""/>
            <h4>Medball Abs Exercise</h4>
            <img class = "img-fluid" src={img5} alt=""/>
          </div>
       </div>
    )
}

export default Abs
