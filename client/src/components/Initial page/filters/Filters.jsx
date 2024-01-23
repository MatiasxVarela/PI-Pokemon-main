import {  orderPokemonsInReverse, pokemonsSortedAlphabetically, getUserCreatedPokemons, orderPokemonsForMaxAttack} from "../../../redux/actions";
import React from "react";
import SelectPokemonType from "./SelectPokemonType"
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ResetButton from "./ResetButton";
import SwitchButton from "./SwitchButton"

const FiltersDiv = styled.div`
    display: block;
    flex-direction: column;
    min-width: 285px;
    max-width: 285px;
    min-height: 755px;
    max-height: 775px;
    margin: 15px 10px 1vh 70px;
    border: 2px solid rgba(255, 215, 0, 0.83);
    background-color: rgba(76, 109, 242, 0.83);
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    @media (max-width: 600px) {
    display: none;
    margin: 0px;
    }
`;

const StyledH2 = styled.h2`
    font-family: 'OldPokemonFont';
`;



export default function Filters() {
    const dispatch = useDispatch()
    const descendingStatus = useSelector(store => store.pokemonsSortValues.reverse)
    const alphabeticallyStatus = useSelector(store => store.pokemonsSortValues.alphabetically)
    const createdByUserStatus = useSelector(store => store.pokemonsSortValues.CreatedByUser)
    const maxAttack = useSelector(store => store.pokemonsSortValues.attack)

    const orderInReverse = () => {
        dispatch(orderPokemonsInReverse())
    }
    
    const orderInAlphabetically = () => {
        dispatch(pokemonsSortedAlphabetically())
    }

    const pokemonsCreatedByUser = () => {
        dispatch(getUserCreatedPokemons())
    }

    const orderInMaxAttack = () => {
        dispatch(orderPokemonsForMaxAttack())
    }


    return (
    <FiltersDiv>
        <StyledH2>Filters:</StyledH2>
        <SwitchButton active={createdByUserStatus} tittle={"Pokemons by user:"}click={pokemonsCreatedByUser}></SwitchButton>
        <SelectPokemonType/>
        <SwitchButton active={maxAttack} tittle={"Pokemons for max attack:"}click={orderInMaxAttack}></SwitchButton>
        <SwitchButton active={alphabeticallyStatus} tittle={"Sort in alphabetically:"}click={orderInAlphabetically}></SwitchButton>
        <SwitchButton active={descendingStatus} tittle={"Sort in descending:"}click={orderInReverse}></SwitchButton>
        <ResetButton/>
    </FiltersDiv>
    );
 }