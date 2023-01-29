import './App.css';
import InitialPage from './components/Initial page/InitialPage';
import PokemonInfo from './components/PokemonsInfo/PokemonInfo';
import { getAllPokemons, getPokemonsInOrder, getPokemonsTypes } from "./redux/actions/index";
import Home from './components/Home';
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import LogoRedirect from './components/NavBar/LogoRedirect';
import styled from 'styled-components';
import bgImage from "./img/Bg.png"

const AppDiv = styled.div`
    background-image: url("${bgImage}");
    background-size: cover;
    background-repeat: no-repeat;
`;

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
    <AppDiv className="App">
      {thisPath !== "/" && <NavBar></NavBar>}
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<LogoRedirect></LogoRedirect>}/>
      <Route path="/home/:id" element={<InitialPage></InitialPage>}/>
      <Route path="/pokemon" element={<PokemonInfo/>}/>
      </Routes>
    </AppDiv>
  );
}

export default App;
