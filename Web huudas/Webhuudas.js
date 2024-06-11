import React, { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Tic from "../XO/Tic";
import Togloom from "../Togloom";
import Movie from "../Movies";
import "./web.css";
import Puuznuud from "../Puuznuud";
import TooTaah from "../lesson 39/TooTaah";
const Webhuudas = () => {
  const [contaner, setcontaner] = useState(0);
  const showXo = () => {
    setcontaner(1);
  };
  const showclickspeed = () => {
    setcontaner(2);
  };
  const showPuu = () => {
    setcontaner(3);
  };
  const showKino = () => {
    setcontaner(4);
  };
  const showToo = () => {
    setcontaner(5);
  };
  const { width, height } = useWindowSize();
  return (
    <div>
      <Confetti width={width} height={height} />
      <div className="towch">
        <button onClick={showXo} className="b">
          Xo
        </button>
        <button onClick={showclickspeed} className="b">
          Clickspeed
        </button>
        <button onClick={showPuu} className="b">
          Puuz
        </button>
        <button onClick={showKino} className="b">
          kino
        </button>
        <button onClick={showToo} className="b">
          sansan too
        </button>
      </div>
      <div className="contaner">
        {contaner === 1 && <Tic />}
        {contaner === 2 && <Togloom />}
        {contaner === 3 && <Puuznuud />}
        {contaner === 4 && <Movie />}
        {contaner === 5 && <TooTaah />}
      </div>
    </div>
  );
};

export default Webhuudas;
