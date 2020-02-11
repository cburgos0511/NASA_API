import React from "react";

const Home = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Welcome</h1>
        <p className="lead">
          This projects uses NASA's Near Earth Object Web Service, a RESTful web
          service for near earth Asteroid information and Astronomy Picture of
          the Day, this endpoint gives you the ability pictures taken everyday
          for the past 20+ years.
        </p>
        <hr className="my-4" />
        <a
          className="btn btn-primary btn-lg"
          href="https://api.nasa.gov/"
          role="button"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Home;
