import React from "react";
import "./Sneaker.css";
// import Likeee from "Likeee";
const Sneaker = ({ name, image, desc }) => {
  return (
    <div className="huree">
      <img src={image} alt="" />
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Sneaker;
