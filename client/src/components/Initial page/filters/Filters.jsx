import {  orderPokemonsInReverse, pokemonsSortedAlphabetically, getUserCreatedPokemons, resetAllFilters } from "../../../redux/actions";
import React from "react";
import SelecPokemonType from "./SelectPokemonType"
import { useDispatch } from "react-redux";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import ResetButton from "./ResetButton";

const FiltersDiv = styled.div`
    display: block;
    flex-direction: column;
    width: 15vw;
    height: 62vh;
    padding-top: 3vh;
    padding-bottom: 15vh;
    margin: 15px 10px 1vh 70px;
    border: 2px solid rgba(255, 215, 0, 0.83);
    background-color: rgba(76, 109, 242, 0.83);
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.6);
    border-radius: 15px;
`;



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
    <FiltersDiv>
        <SelecPokemonType></SelecPokemonType>
        <FilterButton onClick={orderInReverse} textButton="Order in reverse"></FilterButton>
        <FilterButton onClick={orderInAlphabetically} textButton="Order in Alphabetically"></FilterButton>
        <FilterButton onClick={pokemonsCreatedByUser} textButton="User pokemons"></FilterButton>
        <ResetButton onClick={resetPageFilters} textButton="Reset all filters"></ResetButton>
    </FiltersDiv>
    );
 }