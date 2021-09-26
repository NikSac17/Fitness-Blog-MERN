import React from 'react';
import { Link } from "react-router-dom";
import img1 from "./images/E1.jpeg";
import img2 from "./images/E2.jpeg";
import img3 from "./images/E3.jpeg";
import img4 from "./images/E4.jpeg";
import img5 from "./images/E5.jpeg";

const Exercises = () => {
    return (
        <div>
            <div className="container w-100  ">
        <img src={img1} className="img-fluid  mx-auto d-block" alt="img1"/>
    </div>

    <div className="container my-4">
        <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7">
                <h2 className="featurette-heading">Upper Body and Lower Body <span className="text-muted"> Quite Helpful </span>
                </h2>
                <p className="lead">By splitting your workouts between your upper body musculature and lower body
                    musculature, you are able to optimize training frequency and volume distribution in a way that will
                    also allow for maximum intensity in any given session.</p>
                <p>
                <h4>Exercises for Body : </h4>
                <ul>
                    <li>Bench Press</li>
                    <li>Shoulder Press</li>
                    <li>Barbell Curls</li>
                    <li>Skull Crushers</li>
                    <li>Lat Pull Down</li>
                </ul>
                <h4>Exercises for Lower Body : </h4>
                <ul>
                    <li>Squats</li>
                    <li>Leg Press</li>
                    <li>Leg Extension</li>
                </ul>
                </p>
            </div>
            <div className="col-md-5">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={img2} alt="img2"/>
            </div>
        </div>


        <div className="row featurette my-4 d-flex justify-content-center align-items-center">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">Push Pull Legs <span className="text-muted">Great for beginners</span>
                </h2>
                <p className="lead">Let’s cover some background knowledge first. It is a weightlifting training template
                    that divides and conquers your muscles into groups where each group is trained separately — allowing
                    other muscle groups to have the rest they deserve!
                    Muscles usually work in pairs. So when you are deadlifting, your back and biceps are doing the work
                    while your chest and triceps are relaxing.
                    Which makes this type of training perfect because on Day 1, you can smash your back and your biceps,
                    while giving your chest and triceps a break!</p>
            </div>
            <div className="col-md-5 order-md-1">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={img3} alt="img3"/>
            </div>
        </div>


        <div className="row featurette my-4 d-flex justify-content-center align-items-center">
            <div className="col-md-7">
                <h2 className="featurette-heading">Weekly Scdeudle <span className="text-muted"> Planning is important</span>
                </h2>
                <p className="lead">Simply plan before going to gym what you are going to do each day. Planning is must
                    before going to gym. Plan how many sets how many reps you are going to hit before going to gym.</p>
                <ul>
                    <li> <Link to="/chest">Chest</Link></li>
                    <li> <Link to="/back">Back</Link></li>
                    <li> <Link to="/arms">Arms</Link></li>
                    <li> <Link to="/shoulders">Shoulders</Link></li>
                    <li> <Link to="/legs">Legs</Link></li>
                    <li> <Link to="/cardio">Cardio</Link></li>
                    <li> <Link to="/abs">Abs</Link></li>
                </ul>
            </div>
            <div className="col-md-5">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={img4} alt="img4"/>
            </div>
        </div>


        <div className="row featurette my-4 d-flex justify-content-center align-items-center">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">Nuclei Overloading <span className="text-muted"> Increasing Size</span></h2>
                <p className="lead">The theory of nucleus overload training is training a body part for a month, you will
                    have more growth. The belief is that if you train a muscle group every single day, the nuclei within
                    that muscle increases and you have a better response. Seriously, professional research-based
                    bodybuilders don't do this. They stay abreast on the latest and greatest in sports training
                    technology.If you still want to try this training method, no one is going to stop you. I will say
                    that if you are doing some off the wall training that no one else in the fitness industry has even
                    heard of, it's probably a complete waste of your time.

                </p>
            </div>
            <div className="col-md-5 order-md-1">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={img5} alt="img5"/>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Exercises
