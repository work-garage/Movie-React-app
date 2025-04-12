import { useState } from "react";
import "./SearchMovies.css";
import movieImg from "./movie.png";

function SearchMovies({ addHistory, historySaved }) {
  const [movieTitle, setMovieTitle] = useState("");

  const searchMovie = async (e) => {
    e.preventDefault();
    const url = process.env.url


    try {
      const response = await fetch(url, {
        method: "GET", // Ensures we're making a GET request
        headers: {
          Origin: window.location.origin, // This is required by the CORS proxy                    //WHY?
          "X-Requested-With": "XMLHttpRequest", // This header is sometimes required as well
        },
      });
      const data = await response.json(); // Convert data to JSON
      addHistory(data); // Add the fetched data to the history
      console.log(historySaved);
    } catch (err) {
      console.log(err); // Log any errors
    }
  };

  return (
    <div className="search">
      <form onSubmit={searchMovie}>
        <img
          style={{
            marginBottom: "-7px",
            marginTop: "-4px",
            marginRight: "3px",
            height: "40px",
            width: "40px",
          }}
          src={movieImg}
          alt="Movie"
        />
        <label htmlFor="query">Movie Title</label>
        <input
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder="Enter Movie Title"
          role="search"
          name="query"
          id="query"
        />
        <button type="submit" style={{ margin: "7px" }}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchMovies;