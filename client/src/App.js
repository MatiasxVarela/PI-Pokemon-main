import './App.css';
import InitialPage from './components/Initial page/InitialPage';
import PokemonInfo from './components/PokemonInfo';
import { getAllPokemons, getPokemonsInOrder, getPokemonsTypes } from "./redux/actions/index";
import Home from './components/Home';
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import LogoRedirect from './components/LogoRedirect';

function App() {
  const dispatch = useDispatch()
  const thisPath = useLocation().pathname
  const allPokemons = useSelector(state => state.pokemons)

    useEffect(() => {
      dispatch(getAllPokemons())
      dispatch(getPokemonsTypes())
  },[dispatch])

    useEffect(() => {
      allPokemons.length > 0 && dispatch(getPokemonsInOrder(allPokemons))
  },[allPokemons, dispatch])

  return (
    <div className="App">
      {thisPath !== "/" && <NavBar></NavBar>}
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<LogoRedirect></LogoRedirect>}/>
      <Route path="/home/:id" element={<InitialPage></InitialPage>}/>
      <Route path="/pokemon" element={<PokemonInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
