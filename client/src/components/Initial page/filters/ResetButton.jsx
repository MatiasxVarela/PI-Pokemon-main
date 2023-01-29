import { resetAllFilters } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import styled from "styled-components";
import ResetArrow from "../../../img/FlechaPokemon2t.png"
import { goToTop } from "../../../Util/goToTop"

const StyleDivButton = styled.div`
    &:hover {
        transform: scale(1.1);
    }
    transition: transform 0.5s ease-in-out;
`;

const StyledH4 = styled.h4`
    font-family: 'OldPokemonFont';
    font-size: 20px;
`;

const StyledButton = styled.button`  
    background-image: url("${ResetArrow}");
    margin: 0px 0px 0px 10px;
    width: 60px;
    height: 63px;
    background-color: transparent;
    border: none;
    color: inherit;
    transition: transform 0.6s linear;
    transform: rotate(${props => props.rotation}deg);
`;

export default function ResetButton() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [rotation, setRotation] = useState(0);

    const handleClick = () => {
        goToTop()
        setRotation(rotation + 360)
        setTimeout(() => {
               dispatch(resetAllFilters());
            navigate("/home/1");
        }, 320);
    }
    
    return (
    <>
        <StyledH4>Reset all filters: </StyledH4>
        <StyleDivButton>
            <StyledButton rotation={rotation} onClick={handleClick}></StyledButton>
        </StyleDivButton>
    </>
    );
 }