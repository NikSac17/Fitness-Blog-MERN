import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import FitnessMania from "./pages/FitnessMania";
// import FitnessCalculator from "./pages/FitnessCalculator";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
// import Footer from "./pages/Footer";
import Chest from "./pages/exercises/Chest";
import Back from "./pages/exercises/Back";
import Arms from "./pages/exercises/Arms";
import Shoulders from "./pages/exercises/Shoulders";
import Legs from "./pages/exercises/Legs";
import Cardio from "./pages/exercises/Cardio";
import Abs from "./pages/exercises/Abs";

import NavBar from "./pages/NavBar";
import Exercises from "./pages/Exercises";
import Bmi from "./pages/fitnessCalculator/Bmi";
import Bmr from "./pages/fitnessCalculator/Bmr";
import Fat from "./pages/fitnessCalculator/Fat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ScheduleWorkout from "./pages/ScheduleWorkout";
import NoteState from "./pages/context/NoteState";
import ArticleSoloPage from "./pages/ArticleSoloPage";
import Alert from "./pages/Alert";
// import "./App.css";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <NoteState>
      <Router>
        <NavBar showAlert={showAlert}/>
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/">
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
          <Route path="/articlePage">
            <ArticleSoloPage />
          </Route>
          <Route path="/fitnessmania">
            {/* //intro page */}
            <FitnessMania />
          </Route>
          {/* <Route path="/fitnesscalculator">
            <FitnessCalculator />
          </Route> */}
          <Route path="/bmi">
            <Bmi />
          </Route>
          <Route path="/bmr">
            <Bmr />
          </Route>
          <Route path="/fat">
            <Fat />
          </Route>
          <Route path="/login">
            <Login showAlert={showAlert} />
          </Route>
          <Route path="/signup">
            <Signup showAlert={showAlert} />
          </Route>
          <Route path="/scheduleworkout">
            <ScheduleWorkout showAlert={showAlert}/>
          </Route>
          <Route path="/contact">
            <Contact showAlert={showAlert}/>
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </NoteState>
  );
}

export default App;
