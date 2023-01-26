import './App.css';
import InitialPage from './components/InitialPage';
import PokemonInfo from './components/PokemonInfo';
import { getAllPokemons, getPokemonsInOrder } from "./redux/actions/index";
import Home from './components/Home';
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  const allPokemons = useSelector(state => state.pokemons)

    useEffect(() => {
      dispatch(getAllPokemons())
  },[dispatch])

    useEffect(() => {
      allPokemons.length > 0 && dispatch(getPokemonsInOrder(allPokemons))
  },[allPokemons, dispatch])

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
