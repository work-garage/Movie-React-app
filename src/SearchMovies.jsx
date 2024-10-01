import { useState } from "react";

function SearchMovies({ addHistory, historySaved }) {
  const [movieTitle, setMovieTitle] = useState("");

  const searchMovie = async (e) => {
    e.preventDefault();
    const url = `http://www.omdbapi.com/?apikey=1d6e9251&t=${movieTitle}`; //For links use backticks(``) not single quotes('')

    try {
      const response = await fetch(url); //fetch("_")    fetch data from url
      const data = await response.json(); //val.json()  convert data to json
      addHistory(data);
      console.log(historySaved);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={searchMovie}>
        <label htmlFor="query">Movie Title</label>

        <input
          type="text"
          value={movieTitle} //value={movieTitle} 1) helps in Controlled Component for validation, where the value of the input field is managed by the state. 2)is pre entered default value in input bar, will get to see when given movieTitle some initial value
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder="Enter Movie Title" //placeholder="Enter Movie Title" is uneditable light coloured text you will see, when no value is entered
          role="search"
          name="query"
          id="query"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchMovies;

// arr.map((val)=>{ any work done by using val }) //val is each element of arr given one by one inside arrow function, like loop
// arr.map((val,index)=>{ any work done by using val and index })   Parameter 1)each value 2)its index

//to see Explaination of what is e and how its working

//await,async

//from where non outermost arrow func get values of their parameters? eg:- const searchMovie = async (e) => {}

//Explain:
/* const searchMovie = async (e) => {
    e.preventDefault();
    const url =
      "http://www.omdbapi.com/?i=tt3896198&apikey=1d6e9251=${movieTitle}";

    try {
      const response = await fetch(url);
      const data = await response.json();
    } catch (err) {
      console.log(err);
    }
*/
