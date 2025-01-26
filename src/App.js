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

/*
  const removeItem = (itemToRemove) => {
    setItems((prevItems) => 
      prevItems.filter((item) => item !== itemToRemove)
    );
  };

  return (
    <div>
      <h3>Items:</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

&

const doRemove=(removeData)=>{}

&

pass doRemove 

&

<button onClick={()=>doRemove()} >Remove from History</button>
*/