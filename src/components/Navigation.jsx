import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        NASA API's
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/apod" className="nav-link">
              APOD
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/insight" className="nav-link">
              Insight
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/asteroids" className="nav-link">
              Asteroids
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
