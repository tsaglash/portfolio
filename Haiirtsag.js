import React from "react";
import "./togloom.css";
const Haiirtsag = ({ too, tailbar, color }) => {
  return (
    <div className={"t " + color}>
      <h1>{too}</h1>
      <p>{tailbar}</p>
    </div>
  );
};

export default Haiirtsag;
