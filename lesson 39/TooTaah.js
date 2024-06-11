import React, { useState } from "react";
import "./too.css";
const TooTaah = () => {
  const [random, setrandom] = useState(Math.floor(Math.random() * 100));
  const [taasanToo, settaasanToo] = useState("");
  const [hariu, sethariu] = useState("");
  const [bolomj, setbolomj] = useState(5);
  console.log(random);
  const handleChange = (e) => {
    const text = e.target.value;
    console.log(text);
    settaasanToo(text);
  };
  const handleClick = () => {
    console.log(random, taasanToo);
    if (random == taasanToo) {
      console.log("TA HOJLOO");
      sethariu("ta hojloo");
    } else if (taasanToo > random) {
      console.log("IH BN");
      sethariu("ih bn");
    } else {
      setbolomj(bolomj - 1);
      console.log("BAGA BN");
      sethariu("baga bn");
    }
  };
  return (
    <div className="style">
      <h1>SANSAN TOO TAAH</h1>
      <p>1-100-n hoorond baigaa toog taah</p>
      <div>
        <input
          onChange={handleChange}
          type="number"
          placeholder="taah toog oruul"
        />
        <button onClick={handleClick}>taah</button>
      </div>

      <h3>hariu :</h3>
    </div>
  );
};

export default TooTaah;
