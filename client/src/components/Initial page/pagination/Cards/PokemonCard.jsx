import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const CardDiv = styled.div`
    &:hover{
        transform: scale(1.15);
        box-shadow: 0px 0px 12px rgba(255, 255, 255, 0.55);
    }
    font-family: 'OldPokemonFont';
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 300px;
    margin: 15px 15px 20px 10px;
    border: 2px solid rgba(255, 215, 0, 0.83);
    background-color: rgba(76, 109, 242, 0.83);
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    transition: all 0.65s;
`;

const StyledH1 = styled.h1`
    font-size: 1.6em;
`;

const CardImg = styled.img`
    height: 250px;
    width: 250px;
`;

const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;



export default function PokemonCard(props) {
    return (
        <CardDiv>
            <CardLink to={`/pokemon?id=${props.id}`}>
                <StyledH1>{props.name}</StyledH1>
                <CardImg src={props.sprite} alt="" />
                {
                !!props.pokemonTypes 
                && !props.pokemonTypes[1] 
                && <p>{`Type: ${props.pokemonTypes[0].name}.`}</p>
                }

                {
                !!props.pokemonTypes 
                && !!props.pokemonTypes[1] 
                && <p>{`Type: ${props.pokemonTypes[0].name}, ${props.pokemonTypes[1].name}.`}</p>
                }
                <p>{`Attack: ${props.attack}`}</p>
            </CardLink>
        </CardDiv>
    );
 }