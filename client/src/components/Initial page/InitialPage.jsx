import { getPageId, orderPokemonsInReverse, pokemonsSortedAlphabetically, getUserCreatedPokemons, resetAllFilters } from "../../redux/actions";
import React from "react";
import NavigatePageButtons from "./NavigatePageButtons";
import PokemonCard from "./PokemonCard";
import { useEffect} from "react";
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import Filters from "./filters/Filters"
import SelecPokemonType from "./filters/SelectPokemonType";

export default function InitialPage () {
    let id = parseInt(useParams().id);
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemonsInOrder)

    useEffect(() => {
        dispatch(getPageId(id))
    },[id, dispatch])

    return (
    <div>
        <Filters></Filters>
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