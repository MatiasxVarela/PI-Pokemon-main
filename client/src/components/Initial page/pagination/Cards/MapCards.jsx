import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
const CardContainer = styled.div`
    float: top;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
`;

export default function MapCards() {
    const pokemons = useSelector(state => state.pokemonsInOrder)
    const id = useSelector(state => state.pageId)
    return (
        <CardContainer>
        {
            pokemons.length !== 0 && pokemons.slice(((id - 1) * 12), (id * 12)).map(
               (pokemon) => 
                <PokemonCard 
                    id={pokemon.id}
                    key={pokemon.id} 
                    name={pokemon.name} 
                    sprite={pokemon.sprite} 
                    pokemonTypes={pokemon.pokemonTypes} 
                />
                )
            }
        </CardContainer>
    );
 }