import './App.css';
import Router from './Router';
import Fotter from './components/footer/Footer';
import Navbar from './components/navbar/NavbarTop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Router />
      </header>
      <footer>
        <Fotter />
      </footer>
    </div>
  );
}

export default App;
