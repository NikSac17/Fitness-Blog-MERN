import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import FitnessMania from "./pages/FitnessMania";
import FitnessCalculator from "./pages/FitnessCalculator";
import Contact from "./pages/Contact";
import Notes from "./pages/Notes";
import Error from "./pages/Error";
import Footer from "./pages/Footer";
import Chest from "./pages/exercises/Chest";
import Back from "./pages/exercises/Back";
import Arms from "./pages/exercises/Arms";
import Shoulders from "./pages/exercises/Shoulders";
import Legs from "./pages/exercises/Legs";
import Cardio from "./pages/exercises/Cardio";
import Abs from "./pages/exercises/Abs";

import NavBar from "./pages/NavBar";
import Exercises from "./pages/Exercises";
// import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/exercises">
          <Exercises />
        </Route>
        <Route path="/chest">
          <Chest />
        </Route>
        <Route path="/back">
          <Back />
        </Route>
        <Route path="/arms">
          <Arms />
        </Route>
        <Route path="/shoulders">
          <Shoulders />
        </Route>
        <Route path="/legs">
          <Legs />
        </Route>
        <Route path="/cardio">
          <Cardio />
        </Route>
        <Route path="/abs">
          <Abs />
        </Route>

        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/fitnessmania">
          {/* //intro page */}
          <FitnessMania />
        </Route>
        <Route path="/fitnesscalculator">
          <FitnessCalculator />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
