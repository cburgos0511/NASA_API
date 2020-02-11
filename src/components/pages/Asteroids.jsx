import React, { useState, useEffect } from "react";
import axios from "axios";
import AsteroidItem from "../Asteroids/AsteroidItem";

const Asteroids = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");

  const yyyymmdd = () => {
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    return y + "-" + (m < 10 ? "0" : "") + m + "-" + (d < 10 ? "0" : "") + d;
  };
  useEffect(() => {
    setDate(yyyymmdd());
    if (date === "") return;
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=sHOWPLoykboOf0Fc9gO6Igm1ofQPhKMFe7Pplc78`
      )
      .then(res => {
        setData(res.data.near_earth_objects[`${date}`]);
      })
      .catch(error => console.log(error));
  }, [date]);

  const asteroid = data.map(item => {
    return (
      <AsteroidItem
        key={item.id}
        name={item.name}
        mag={item.absolute_magnitude_h}
        velocity={item.close_approach_data[0].relative_velocity.miles_per_hour}
        maxDiameter={item.estimated_diameter.feet.estimated_diameter_max}
        minDiameter={item.estimated_diameter.feet.estimated_diameter_min}
        miss={item.close_approach_data[0].miss_distance.miles}
        danger={item.is_potentially_hazardous_asteroid}
      />
    );
  });

  const renderTable = () => {
    return (
      <>
        <div>
          <h1 className="center">Today's Asteroids </h1>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Abs. Magnetude</th>
              <th scope="col">Velocity</th>
              <th scope="col">Max/Min Diameter</th>
              <th scope="col">Miss Distance (miles)</th>
              <th scope="col"> Potential Danger</th>
            </tr>
          </thead>
          <tbody>{asteroid}</tbody>
        </table>
      </>
    );
  };

  return !data ? <div>Loading...</div> : <div>{renderTable()}</div>;
};

export default Asteroids;
