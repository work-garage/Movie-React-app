import React from "react";
import MovieList from "./MovieList";

const History = ({ historySaved }) => {
  return (
    <div>
      <h4>History</h4>
      <MovieList Saved={historySaved} />
    </div>
  );
};

export default History;
