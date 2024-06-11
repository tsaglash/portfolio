import React, { useState } from "react";
import "./stars.css";
const numbers = [1, 2, 3, 4, 5];
const Stars = () => {
  const [daragdsanOd, setDaragdsanOd] = useState();
  const ClickStar = (index) => {
    setDaragdsanOd(daragdsanOd === index ? "" : index);
  };
  return (
    <div>
      {odnuud.map((odniiToo) => (
        <span
          className={daragdsanOd >= odniiToo ? "srars" : ""}
          onClick={() => {
            ClickStar(odniiToo);
          }}
        >
          {" "}
          ✯
        </span>
      ))}
    </div>
  );
};

export default Stars;
