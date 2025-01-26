import React from "react";
import './MovieCard.css';

const MovieCard = ({ val }) => {
  return (
    <div className="card">
        <img style={{height:"500px", width:"350px"}} src={val.Poster} alt={"Movie " + val.Title + " img"} />
        <div style={{ textAlign: "left", marginLeft: "20px", width:"350px" }}>
          <p style={{ fontWeight:"900", width:"350px"}}>{val.Title}</p>
          <p>{val.Awards}</p>
          <p>{"Rating: " + val.Rated}</p>
          <p>{"Release Date: " + val.Released}</p>
          <p style={{ width:"350px"}}>{"Director: " + val.Director}</p>
          <hr />
        </div>
        <div className="card2">
        <p>{"Plot: " + val.Plot}</p>
        </div>
    </div>
  );
};

export default MovieCard;
