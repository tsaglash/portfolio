import React from "react";
import "./web.css";
const Huudas = (image, name, desc) => {
  return (
    <div>
      <img src={image} alt="" />
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Huudas;
