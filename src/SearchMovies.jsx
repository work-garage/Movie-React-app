import React, { useState } from "react";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&t=${query}`
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setMovie(data);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>

      {error && <div>Error: {error}</div>}
      {movie && movie.Response === "True" ? (
        <div>
          <h1>{movie.Title}</h1>
          <p>{movie.Plot}</p>
        </div>
      ) : movie && movie.Response === "False" ? (
        <div>No results found.</div>
      ) : null}
    </div>
  );
};

export default MovieSearch;