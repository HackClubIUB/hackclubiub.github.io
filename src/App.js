import './App.css';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Rules from './components/Rules';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Home />
      <Team />
      <Rules />
      <Faqs />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
