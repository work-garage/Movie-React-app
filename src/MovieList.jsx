import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ Saved }) => {
  return (
    <div>
      <ul>
        {Saved.map((val) => (
          <MovieCard val={val} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
