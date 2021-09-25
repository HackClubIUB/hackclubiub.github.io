import './App.css';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Rules from './components/Rules';
import Team from './components/Team';
import Workshops from './components/Workshops';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
            <Team />
            <Rules />
            <Faqs />
          </Route>
          <Route path="/Workshops" exact>
            <Workshops />
          </Route>
          <Route path="/Projects" exact>
            <Projects />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
