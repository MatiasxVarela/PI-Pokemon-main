import React from "react";
import styled from "styled-components";
import HomeButton from "./HomeButton";
import { useEffect, useState } from "react";

const StyledCardDiv = styled.div`
    font-family: 'OldPokemonFont';
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const StyledH1 = styled.h1`
    margin-bottom: 40px;
    @media (max-width: 600px) {
        margin: 0px 0px 20px 0px;
    }
`;

const StyledImg = styled.img`
    margin: 0px 100px  0px 0px;
    height: 400px;
    width: 400px;
    @media (max-width: 600px) {
        height: 220px;
        width: 220px;
        margin: 10px 0px 0px 0px;
    }
`;

const StyledTextDiv = styled.div`
    height: 530px;
    padding-top: 25px;
    padding-right: 10px;
    margin-left: -40px;
    @media (max-width: 600px) {
        margin: 0px 0px 0px 0px;
        height: 300px;
        padding-top: 15px;
    }
`;

const StyledP = styled.p`
    font-size: 18px;
    margin-top: 28px;
    margin-bottom: 28px;
    @media (max-width: 600px) {
        margin: 10px 0px 10px 0px;
    }
`;

export default function InfoCard(props) {
    const { pokemon } = props
    const [windowWidth, setWindowWidth] = useState(window.screen.width);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setWindowWidth]);
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
            {windowWidth <= 600
            && <HomeButton></HomeButton>
            }
        </StyledTextDiv>
    </StyledCardDiv>
    );
 }