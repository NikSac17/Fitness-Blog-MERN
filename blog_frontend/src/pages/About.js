import React from "react";

import img1 from "./images/thumb3.gif";
import img2 from "./images/thumb4.gif";
import img3 from "./images/thumb4.jpg";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7 ">
          <h2 className="featurette-heading">
            It all started back in College.
            <span className="text-muted">It'll blow your mind.</span>
          </h2>
          <p className="lead">
            We are students of IIT Hyderabad. We were enthusiastic about
            bodybuilding. When we searched about how to build muscle and
            maintain our diet, we found out that we had to go through a lot of
            websites and videos to gather information. That's the reason we came
            up with the idea of putting all the information about it at one
            place so that the folks out there could extract all the relative
            information from here.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="img-fluid"
            data-src="holder.js/400x400/auto"
            alt="400x400"
            src={img1}
            data-holder-rendered="true"
          />
        </div>
      </div>
      <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Why do we need to maintain our physique.{" "}
            <span className="text-muted">Ever thought about it?.</span>
          </h2>
          <p className="lead">
            One may question himself as to why he needs to maintain physique.
            Well there are lot of reasons but one of the main reason is to boost
            your self confidence. Maintaining a good physique could change your
            lifestyle and attitude. It is said that the most important project
            you'll ever work on is yourself. Why not work on your body the?
            Intelligence does matter but looks are prioritised. So, get in
            shape.{" "}
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="img-fluid"
            data-src="holder.js/400x400/auto"
            alt="400x400"
            src={img2}
            data-holder-rendered="true"
          />
        </div>
      </div>
      <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Why diet? <span className="text-muted">It'll blow your mind.</span>
          </h2>
          <p className="lead">
            Most of us think that the hard part to get in good shape is about
            lifting weight. No my friends the hardest and predominant factor
            that affect your muscle growth is your diet. About 90% of your body
            is made in the kitchen. We referred to many sites and videos about
            the food one must consume in order to get that dream physique. So,
            whenever you decide to build your body or get leaner think of diet
            as the most cruicial part of your whole plan.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="img-fluid"
            data-src="holder.js/400x400/auto"
            alt="400x400"
            src={img3}
            data-holder-rendered="true"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* <img className="img-fluid" data-src="holder.js/400x400/auto" alt="400x400" style="width: 500px; height: 500px;"
              src={img1} data-holder-rendered="true"/> */
}

//               <img className="img-fluid" data-src="holder.js/400x400/auto" alt="400x400" style="width: 500px; height: 500px;"
//               src={img2} data-holder-rendered="true"/>

// <img className="img-fluid" data-src="holder.js/400x400/auto" alt="400x400" style="width: 500px; height: 500px;"
//               src={img3} data-holder-rendered="true"/>
