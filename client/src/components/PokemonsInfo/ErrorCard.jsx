import React from "react";
import togepi from "../../img/Togepi.png"
import styled from "styled-components";

const StyledImg = styled.img`
    width: 300px;
    height: 300px;
`;

const StyledH2 = styled.h2`
    font-family: 'OldPokemonFont';
    margin-top: 80px;
    margin-bottom: 40px;
`;

export default function ErrorCard(props) {

    return (
        <>
        <StyledH2>{`Pokemon ${props.name} does not exist.`}</StyledH2>
        <StyledImg src={togepi} alt="" />
        </>
    );
 }