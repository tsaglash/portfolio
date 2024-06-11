import React, { useState } from "react";
const Search = () => {
  const [text, setText] = useState("");
  const Moveiss = [
    { name: "spider-man" },
    { name: "Thor:Love and Thunber" },
    { name: "ironman" },
    { name: "The Avengers" },
  ];
  const onTextChange = (e) => {
    const inputText = e.target.value;
    console.log("text:", inputText);
    setText(inputText);
  };
  const FilteredMovie = Moveiss.filter((movie) =>
    movie.name.toLowerCase().includes(text.toLowerCase())
  );
  console.log(FilteredMovie);
  return (
    <div>
      <input type="text" placeholder="Хайлт" onChange={onTextChange} />;
    </div>
  );
};

export default Search;
