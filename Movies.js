import React from "react";
import "./movies.css";
import avengersImg from "./img/a.webp";
import Movie from "./Movie";
import ironmanImg from "../components/img/ironman.jpg";
import spidermanImg from "../components/img/spider-man.jpg";
import thorImg from "../components/img/thor.jpg";
import Search from "./Search";
const Movies = () => {
  // const x =5
  // const numbers = [1,2,3,4]
  // const student = {name:'',age:18}

  const Avengers = {
    name: "The Avengers",
    desc: "Marvel studio",
    image: avengersImg,
  };
  const Ironman = {
    name: "ironman",
    desc: "Marvel studio",
    image: ironmanImg,
  };
  const spiderman = {
    name: "spider-man",
    desc: "Marvel studio",
    image: spidermanImg,
  };
  const thor = {
    name: "Thor:Love and Thunber",
    desc: "Marval studio",
    image: thorImg,
  };

  const kinonuud = [Avengers, Ironman, spiderman, thor];

  return (
    <div className="bairlal">
      <Search />
      {kinonuud.map((kino) => (
        <Movie name={kino.name} desc={kino.desc} img={kino.image} />
      ))}
    </div>
  );
};

export default Movies;
