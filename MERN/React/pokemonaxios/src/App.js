import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';
import axios from 'axios';

function App() {
  const [pokemones,setPokemones] = useState([]);


  const getpokemones = () =>{
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
          .then(response => setPokemones(response.data.results))
  } 

  return (
    <div className="App">
      
      <input 
        type="submit"
        className='btn-getpokemon'
        value="Fetch Pokemon" 
        onClick={() => getpokemones()}
      />
      <ul>{pokemones.map((item,i) =><li key={i}>{item.name}</li>)}</ul>
      
    </div>
  );
}

export default App;
