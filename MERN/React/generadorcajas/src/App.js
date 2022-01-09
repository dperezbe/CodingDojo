import logo from './logo.svg';
import './App.css';
import Formulario from './components/Formulario';
import { useState } from 'react';
import Bloques from './components/Bloques';

function App() {
  const [listColor, SetListColor] = useState([]);
  return (
    <div className="App">
      <Formulario 
        listColor = {listColor}
        SetListColor = {SetListColor}
      />
      <Bloques 
        listColor = {listColor}
        SetListColor = {SetListColor}
      />
    </div>
  );
}

export default App;
