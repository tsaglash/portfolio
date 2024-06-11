import React, { useState } from "react";
import "../components/cunter.css";
const Cunter = () => {
  const [text, setText] = useState("off");

  return (
    <div>
      <button
        className={text === "on" ? "on" : "off"}
        onClick={() => {
          setText(text === "9" ? "on" : "off");
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Cunter;
