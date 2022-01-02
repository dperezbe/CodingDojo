import logo from './logo.svg';
import './App.css';
import Results from './components/Results';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <div className="App">
      
      <Form 
        inputs= {state}
        setInputs = {setState}
        />

      <Results
        data = {state}
      />
    </div>
  );
}

export default App;
