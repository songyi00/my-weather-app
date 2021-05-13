import './App.css';
import Header from './components/Header';

function App() {
  const city = "Seoul";
  return (
    <div className="App">
      <Header region="KR" cityName={city}/>
    </div>
  );
}

export default App;
