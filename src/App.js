import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainMenu from './pages/MainMenu/MainMenu.js';
function App() {
  return (
  <Router>
    <div> 
      <MainMenu/>
    </div>
    </Router>
  );
}

export default App;
