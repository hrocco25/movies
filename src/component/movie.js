import React from "react";

const Movie = props => {
  return (
    <div>
      <div>
        <h2>{props.category}</h2>
      </div>
      <div onClick={() => props.details(props.film.title)}>
        <h3>{props.film.title}</h3>
        {/* <img src={`./images/${props.film.poster_path}`}></img> */}
      </div>
    </div>
  );
};

export default Movie;
