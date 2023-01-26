import './App.css';
import InitialPage from './components/InitialPage';
import PokemonInfo from './components/PokemonInfo';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home/:id" element={<InitialPage></InitialPage>}/>
      <Route path="/pokemon" element={<PokemonInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
