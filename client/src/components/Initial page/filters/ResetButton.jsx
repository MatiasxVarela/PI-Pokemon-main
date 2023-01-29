import React from "react";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import styled from "styled-components";
import ResetArrow from "../../../img/FlechaPokemon2t.png"

const StyledH4 = styled.h4`
    font-family: 'OldPokemonFont';
`;

const StyledButton = styled.button`  
    background-image: url("${ResetArrow}");
    margin: 0px 0px 0px 10px;
    width: 60px;
    height: 63px;
    background-color: transparent;
    border: none;
    color: inherit;
    transition: transform 0.5s ease-in-out;
    transform: rotate(${props => props.rotation}deg);
`;

export default function ResetButton(props) {
    const [rotation, setRotation] = useState(0);
    const { onClick } = props

    const handleClick = () => {
            setRotation(rotation + 360)
    }
    
    return (
    <>
        <StyledH4>Reset all filters: </StyledH4>
        <NavLink to={`/home/1`}> <StyledButton rotation={rotation} onClick={() => {onClick(); handleClick()}}></StyledButton> </NavLink>
    </>
    );
 }