import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import ErrorCard from "./ErrorCard";

const CardContainer = styled.div`
    display: flex;
    margin-left: 50px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export default function MapCards() {
    const pokemons = useSelector(state => state.pokemonsInOrder)
    const id = useSelector(state => state.pageId)
    return (
        <CardContainer>
        {
            pokemons.length !== 0 
            && pokemons.slice(((id - 1) * 12), (id * 12)).map(
               (pokemon) => 
                <PokemonCard 
                    id={pokemon.id}
                    key={pokemon.id} 
                    attack={pokemon.attack}
                    name={pokemon.name} 
                    sprite={pokemon.sprite} 
                    pokemonTypes={pokemon.pokemonTypes} 
                />
                )
            }
        {
        pokemons.length === 0
        && <ErrorCard/>
        }
        </CardContainer>
    );
 }