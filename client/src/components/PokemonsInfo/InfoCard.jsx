import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
`;

export default function InfoCard(props) {
    const { pokemon } = props
    return (
    <StyledDiv>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprite} alt="" />
        <p>{`HP: ${pokemon.hp}.`}</p>
        <p>{`Attack: ${pokemon.attack}.`}</p>
        <p>{`Defense: ${pokemon.defense}.`}</p>
        {!!pokemon.pokemonTypes && !pokemon.pokemonTypes[1] && <p>{`Type: ${pokemon.pokemonTypes[0].name}.`}</p>}
        {!!pokemon.pokemonTypes && !!pokemon.pokemonTypes[1] && <p>{`Type: ${pokemon.pokemonTypes[0].name}, ${pokemon.pokemonTypes[1].name}.`}</p>}
        <p>{`Speed: ${pokemon.speed}.`}</p>
        <p>{`Height: ${pokemon.height}.`}</p>
        <p>{`Weight: ${pokemon.weight}.`}</p>
    </StyledDiv>
    );
 }