import React from "react";
import styled from "styled-components";

const StyledCardDiv = styled.div`
    font-family: 'OldPokemonFont';
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const StyledH1 = styled.h1`
    margin-bottom: 40px;
`;

const StyledImg = styled.img`
    margin: 0px 100px  0px 0px;
    height: 400px;
    width: 400px;
`;

const StyledTextDiv = styled.div`
    height: 530px;
    padding-top: 25px;
    padding-right: 10px;
    margin-left: -40px;
`;

const StyledP = styled.p`
    font-size: 18px;
    margin-top: 28px;
    margin-bottom: 28px;
`;

export default function InfoCard(props) {
    const { pokemon } = props
    
    return (
    <StyledCardDiv>
        <div>
            <StyledImg src={pokemon.sprite} alt="" />
        </div>
        <StyledTextDiv>
            <StyledH1>{pokemon.name}</StyledH1>
            <StyledP>{`Pokemon id: ${pokemon.id}`}</StyledP>

            {
            !!pokemon.pokemonTypes 
            && !pokemon.pokemonTypes[1] 
            && <StyledP>{`Type: ${pokemon.pokemonTypes[0].name}.`}</StyledP>
            }

            {
            !!pokemon.pokemonTypes 
            && !!pokemon.pokemonTypes[1] 
            && <StyledP>{`Type: ${pokemon.pokemonTypes[0].name}, ${pokemon.pokemonTypes[1].name}.`}</StyledP>
            }
            <StyledP>{`HP: ${pokemon.hp}.`}</StyledP>
            <StyledP>{`Attack: ${pokemon.attack}.`}</StyledP>
            <StyledP>{`Defense: ${pokemon.defense}.`}</StyledP>
            <StyledP>{`Speed: ${pokemon.speed}.`}</StyledP>
            <StyledP>{`Height: ${pokemon.height}.`}</StyledP>
            <StyledP>{`Weight: ${pokemon.weight}.`}</StyledP>
        </StyledTextDiv>
    </StyledCardDiv>
    );
 }