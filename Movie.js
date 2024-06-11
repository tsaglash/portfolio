import React from "react";
import "./movies.css";

const Movie = ({ name, desc, img }) => {
  return (
    <div className="movie">
      <img src={img} alt="" />
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Movie;
