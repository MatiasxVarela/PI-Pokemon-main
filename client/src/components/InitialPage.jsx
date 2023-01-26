import { getAllPokemons, getPageId } from "../redux/actions";
import React from "react";
import NavigatePageButtons from "./NavigatePageButtons";
import PokemonCard from "./PokemonCard";
import { useEffect} from "react";
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

export default function InitialPage () {
    let id = parseInt(useParams().id);
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch(getAllPokemons())
    },[])

    useEffect(() => {
        dispatch(getPageId(id))
    },[id])


    return (
    <div>
        <h1>initial page</h1>
        <h2>{`Estas parado en: /home/${id}`}</h2>
        {
        pokemons.length !== 0 && pokemons.slice(((id - 1) * 12), (id * 12)).map(
           (pokemon,index) => 
            <PokemonCard 
                key={index} 
                name={pokemon.name} 
                sprite={pokemon.sprite} 
                pokemonTypes={pokemon.pokemonTypes} 
            />
            )
        }
        <NavigatePageButtons></NavigatePageButtons>


    </div>
    );
 }