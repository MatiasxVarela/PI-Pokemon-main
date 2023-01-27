import { getPageId, orderPokemonsInReverse, pokemonsSortedAlphabetically, getUserCreatedPokemons, resetAllFilters } from "../redux/actions";
import React from "react";
import NavigatePageButtons from "./NavigatePageButtons";
import PokemonCard from "./PokemonCard";
import SelecPokemonType from "./SelectPokemonType";
import { useEffect} from "react";
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

export default function InitialPage () {
    let id = parseInt(useParams().id);
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemonsInOrder)

    useEffect(() => {
        dispatch(getPageId(id))
    },[id, dispatch])

    const orderInReverse = () => {
        dispatch(orderPokemonsInReverse())
    }
    
    const orderInAlphabetically = () => {
        dispatch(pokemonsSortedAlphabetically())
    }

    const pokemonsCreatedByUser = () => {
        dispatch(getUserCreatedPokemons())
    }

    const resetPageFilters = () => {
        dispatch(resetAllFilters())
    }

    return (
    <div>
        <button onClick={resetPageFilters}>Reset all filters</button>
        <button onClick={orderInReverse}>Order in reverse</button>
        <button onClick={orderInAlphabetically}>Order in Alphabetically</button>
        <button onClick={pokemonsCreatedByUser}>User pokemons</button>
        <SelecPokemonType></SelecPokemonType>
        <h1>initial page</h1>
        <h2>{`Estas parado en: /home/${id}`}</h2>
        {pokemons.length > 12 && <NavigatePageButtons></NavigatePageButtons>}
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
        {pokemons.length > 12 && <NavigatePageButtons></NavigatePageButtons>}


    </div>
    );
 }