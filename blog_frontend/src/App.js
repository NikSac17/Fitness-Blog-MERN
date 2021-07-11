import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import FitnessMania from "./pages/FitnessMania";
import FitnessCalculator from "./pages/FitnessCalculator";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

import NavBar from "./pages/NavBar";
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
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
