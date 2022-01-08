import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Formulario from './components/Formulario';

function App() {

  const [tareas, setTareas] = useState([]);
  return (
    <div className="App">
      <ul>{tareas.map((e,i) =>  <li key={i}>{e} </li>)}</ul>
      <Formulario 
        tareas= {tareas}
        setTareas={setTareas}
      />
    </div>
  );
}

export default App;
