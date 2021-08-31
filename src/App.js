import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Home />
      <Team />
    </div>
  );
}

export default App;
