import React, { useState } from "react";
import "./counter.css";

const counter = () => {
  const [count, setCount] = useState(0);
  const tovchDaragdahUyd = () => {
    setCount(count + 1);
  };
  const hasah = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="zai">
      <p>{count}</p>
      <button className="nemeh" onClick={tovchDaragdahUyd}>
        таалагдсан
      </button>
      <button className="hasah" onClick={hasah}>
        таалагдаагүй
      </button>
      <button className="reset" onClick={reset}>
        шинээр эхлэх
      </button>
    </div>
  );
};

export default counter;
