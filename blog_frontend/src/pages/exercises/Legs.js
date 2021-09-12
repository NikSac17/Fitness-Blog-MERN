import React from 'react'

import img1 from "../images/squats.gif";
import img2 from "../images/lunges.gif";
import img3 from "../images/calf_raises.gif";
import img4 from "../images/goblet_squat.gif";
import img5 from "../images/barbell_side_lunges.gif";

const Legs = () => {
    return (
        <div className="container">
        <div className="blog-post">
            <h2 className="blog-post-title">This Section consists exercises for particular Muscle Groups</h2>
            <h2>Legs</h2>

            <p>Below shown are some of the legs exercises.</p>
            <hr/>
            <h4>Squats</h4>
            <img class = "img-fluid" src={img1} alt=""/>
            <h4>Lunges</h4>
            <img class = "img-fluid" src={img2} alt=""/>
            <h4>Calf Raises</h4>
            <img class = "img-fluid" src={img3} alt=""/>
            <h4>Goblet Squat</h4>
            <img class = "img-fluid" src={img4} alt=""/>
            <h4>Barbell Side Lunges</h4>
            <img class = "img-fluid" src={img5} alt=""/>
          </div>
       </div>

    )
}

export default Legs
