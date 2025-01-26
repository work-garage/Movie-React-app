import React from "react";
import MovieCard from "./MovieCard";
import './MovieList.css';

const MovieList = ({ Saved }) => {
  return (
    <div >
      <ul className="flex">
        {Saved.map((val) => (
          <MovieCard val={val} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
