import React, { useState, useEffect } from "react";
import axios from "axios";

const Apod = () => {
  const [item, setItem] = useState([]);
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=sHOWPLoykboOf0Fc9gO6Igm1ofQPhKMFe7Pplc78`
      )
      .then(res => setItem(res.data))
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=sHOWPLoykboOf0Fc9gO6Igm1ofQPhKMFe7Pplc78`
      )
      .then(res => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch(error => {
        console.log(error);
        setError(true);
        setDate("Date must be (YYYY-MM-DD and > 1995-07-01)");
      });
  };
  const renderForm = () => {
    let placeHolder = error ? "YYYY-MM-DD" : date;
    return (
      <form onSubmit={e => handleSubmit(e)} className="input-group mb-3">
        <input
          type="text"
          className="form-control busca"
          placeholder={placeHolder}
          value={date}
          onChange={event => setDate(event.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary busca-btn" type="submit">
            Search
          </button>
        </div>
      </form>
    );
  };

  const renderLoadedComponent = () => {
    return (
      <div className="container">
        {renderForm()}
        <div>
          <h1 className="center">{item.title}</h1>
        </div>
        <div>
          <img src={item.url} alt="" />
        </div>
        <div>
          <div className="explanation-container">
            <p className="explanation">{item.explanation}</p>
          </div>
          <div className="d-flex flex-row">
            <h6>Date: {item.date}</h6>
            <h6>Copyright: {item.copyright}</h6>
          </div>
        </div>
      </div>
    );
  };
  return !item ? <div>Loading...</div> : renderLoadedComponent();
};

export default Apod;
