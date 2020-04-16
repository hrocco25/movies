import React from "react";

const MovieInfo = props => {
  if (!props.currentData) {
    return (
      <div className="select">
        <h3>Please Select a Movie</h3>
        <div className="selectImg"><img src="modern.jpg" alt="modern cinema" ></img></div>
      </div>
    )
  } else {
    return (
      <div className="select">
        <h3>{props.currentData.title}</h3>
        <div className="selectedMovie">
          <img
            src={`https://image.tmdb.org/t/p/w500/${props.currentData.poster_path}`}
            alt={props.currentData.title}
          ></img>
        </div>
        
        <p>Rating: {props.currentData.vote_average}</p>
        <p>{props.currentData.release_date}</p>
        <p>{props.currentData.overview}</p>
      </div>
    );
  }
};

export default MovieInfo;
