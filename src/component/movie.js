import React from "react";

const Movie = props => {
  return (
    <div onClick={() => props.details(props.film.title)}>
      <h3>{props.film.title}</h3>
      {/* <img src={`./images/${props.film.poster_path}`}></img> */}
    </div>
  );
};

export default Movie;
