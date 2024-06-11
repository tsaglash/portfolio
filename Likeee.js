import React, { useState } from "react";

const Likeee = () => {
  const [text, setText] = useState("👎");
  return (
    <div>
      <button
        onClick={() => {
          setText(text === "👍" ? "👎" : "👍");
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Likeee;
