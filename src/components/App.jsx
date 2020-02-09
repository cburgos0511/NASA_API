import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import Navigation from "./Navigation";
import Home from "./pages/Home";
import Apod from "./pages/Apod";
import Insight from "./pages/Insight";
import Asteroids from "./pages/Asteroids";

const App = () => {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/apod" component={Apod} />
        <Route path="/insight" component={Insight} />
        <Route path="/asteroids" component={Asteroids} />
      </div>
    </Router>
  );
};

export default App;
