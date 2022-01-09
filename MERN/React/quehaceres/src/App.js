import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Formulario from './components/Formulario';
import Option from './components/Options';

function App() {

  const [tareas, setTareas] = useState([]);
  return (
    <div className="App">
      <Option 
      tareas= {tareas} 
      setTareas={setTareas}
      />
      <Formulario 
        tareas= {tareas}
        setTareas={setTareas}
      />
    </div>
  );
}

export default App;
