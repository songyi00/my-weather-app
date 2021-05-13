import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const city = "Seoul";
  return (
    <Router>
    <div className="App">
      <Header region="KR" cityName={city}/>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Cities</li>
      </ul>
    </div>
    </Router>
  );
}

export default App;
