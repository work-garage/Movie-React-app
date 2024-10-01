import React from "react";

const MovieCard = ({ val }) => {
  return (
    <div>
      <li>
        <img src={val.Poster} alt={"Movie" + val.Title + "img"} />
        <div>
          <p>{val.Title}</p>
          <p>{val.Awards}</p>
          <p>{val.Rated}</p>
          <p>{val.Released}</p>
          <p>{val.Director}</p>
          <button>Remove from History</button>
          <hr />
        </div>
      </li>
    </div>
  );
};

export default MovieCard;
