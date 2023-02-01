import React from "react";
import styled from "styled-components";
import reload from "../../img/FlechaPokemon2t.png"

const StyledH1 = styled.h1`
    margin-top: 150px;
    font-family: 'OldPokemonFont';
`;

const StyledImg = styled.img`
height: 85px;
width: 85px;
    animation: giro-infinito 1.3s linear infinite;
`;

export default function LoadCard() {

    return(
        <>
        <StyledH1>Loading...</StyledH1>
        <StyledImg src={reload} alt="" />
        </>
    );
 }