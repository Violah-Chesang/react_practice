import './App.css';
import Hero from './components/hero/hero';
import Squad from './components/squad/squad';
import Strength from './components/strength/strength';
import Weakness from './components/weakness/weakness';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Strength /> */}
        {/* <Weakness/> */}
        {/* <Squad /> */}
        <Hero />
      </header>
    </div>
  );
}

export default App;
