import './App.css';
import { useState } from "react";
import SearchMovies from './SearchMovies';
import History from './History';

function App() {

  const [history, setHistory] = useState([]);
  const HandleHistory=(data)=>{setHistory((history) => [data,...history]);}

  return (
    <div className="App">
      <header className="App-header">
        <SearchMovies addHistory={HandleHistory} historySaved={history} />
        <History historySaved={history} /> 
      </header>
    </div>
  );
}

export default App;


/*
   Link:-
   <a  
       className="App-link"  href="https://reactjs.org"  target="_blank"  rel="noopener noreferrer">
       Learn React       -------Text
   </a> 
*/