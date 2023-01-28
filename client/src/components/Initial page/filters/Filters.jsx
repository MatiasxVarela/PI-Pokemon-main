import {  orderPokemonsInReverse, pokemonsSortedAlphabetically, getUserCreatedPokemons, resetAllFilters } from "../../../redux/actions";
import React from "react";
import SelecPokemonType from "./SelectPokemonType"
import { useDispatch } from "react-redux";

export default function Filters() {
    const dispatch = useDispatch()

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
    </div>
    );
 }