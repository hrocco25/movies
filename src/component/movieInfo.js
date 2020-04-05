import React from "react";

const MovieInfo = props => {
  console.log(props.currentData)
  if(!props.currentData){
    return(<div>Please Select a Movie</div>)
  }else{
    return(
      <div>
        <h3>{props.currentData.title}</h3>
        <img src= {`https://image.tmdb.org/t/p/w500/${props.currentData.poster_path}`} alt={props.currentData.title}></img>
        <p>{props.currentData.overview}</p>
        <p>Rating: {props.currentData.vote_average}</p>
        <p>{props.currentData.release_date}</p>

      </div>
    )
  }
 
};

export default MovieInfo;