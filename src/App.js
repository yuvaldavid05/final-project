import './App.css';
import Router from './Router';
import Navbar from './components/navbar/NavbarTop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Router />
      </header>
    </div>
  );
}

export default App;
