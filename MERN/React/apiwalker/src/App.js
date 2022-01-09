import './App.css';
import Menu from './components/Menu';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
        <Router>
            <Menu path="/"/>
            <Menu path="/:id"/>
        </Router>
      
    </div>
  );
}

export default App;
