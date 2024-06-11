import React from "react";
import Sneaker from "./Sneaker";
import puuz from "../components/img/1.png";
import puuz2 from "../components/img/2.png";
import puuz3 from "../components/img/3.png";
import "./Sneaker.css";
const Puuznuud = () => {
  const data = [
    { name: "Nike 1", desc: "Nike1", image: puuz },

    { name: "Nike 2", desc: "Nikee2", image: puuz2 },

    { name: "Nike 3", desc: "Nikeee3", image: puuz3 },
  ];
  return (
    <div className="mur">
      {data.map((puuz) => (
        <Sneaker name={puuz.name} desc={puuz.desc} image={puuz.image} />
      ))}
    </div>
  );
};

export default Puuznuud;
