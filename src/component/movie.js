import React from "react";

const Movie = props => {
  return (
    <div className="movie">
      <div>
        <h2>{props.category}</h2>
      </div>
      <div onClick={() => props.details(props.film.title)}>
        <h4>{props.film.title}</h4>
      </div>
    </div>
  );
};

export default Movie;
