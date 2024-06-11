import React, { useState } from "react";
import Haiirtsag from "./Haiirtsag";
import "./togloom.css";
const Togloom = () => {
  const [onoo, setOnoo] = useState(0);
  const [sec, setSec] = useState(0);
  const handleClick = () => {
    if (onoo === 0) {
      setInterval(() => {
        setSec((sec) => sec + 10);
      }, 10);
    }

    setOnoo(onoo + 1);

    const ranking_names = {
      slow: "Эмгэн хумс 🐌",
      moderate: "Яст мэлхий 🐢",
      average: "Туулай 🐰",
      sonic_speed: "Супер соник 🔥",
      flash: "DC флаш ⚡",
    };
    const handleRanking = () => {
      if (clicksec <= 4) {
        alert(ranking_names.slow);
      } else if (clicksec <= 5) {
        alert(ranking_names.moderate);
      } else if (clicksec <= 6) {
        alert(ranking_names.average);
      } else if (clicksec <= 7) {
        alert(ranking_names.sonic_speed);
      } else if (clicksec > 7) {
        alert(ranking_names.flash);
      }
    };
  };

  const clicksec = (onoo / sec) * 1000;
  return (
    <div className="fastclick">
      <div className="com">
        <Haiirtsag too={sec / 1000} tailbar={"time"} color={"pink"} />
        <Haiirtsag
          too={isNaN(clicksec) ? "0" : clicksec.toFixed(2)}
          tailbar={"click"}
          color={"orange"}
        />
        <Haiirtsag too={onoo} tailbar={"score"} color={"bleu"} />
      </div>
      <button className="tovch" onClick={handleClick}>
        end dar
      </button>
    </div>
  );
};

export default Togloom;
