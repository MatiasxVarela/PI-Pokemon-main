import React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const ButtonNavLink = styled(NavLink)`
    text-decoration: none;
    color: inherit;
`;

const StyledButton =  styled.button`
    &:hover{
        background-color: rgba(76, 109, 242, 0.9);
        border: 2px solid rgba(255, 215, 0,9);
        transform: scale(1.15);
    }
    font-family: 'OldPokemonFont';
    width: 2.25vw;
    height: 3.5vh;
    margin: 10px 5px 20px 5px;
    border: none;
    background-color: rgba(255, 215, 0,9);
    border: 2px solid rgba(76, 109, 242, 0.9);
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    transition: all 0.8s;
`;

export default function PageButton(props) {
    const { id, textButton, onClick } = props
    
    return (
    <>
        <ButtonNavLink to={`/home/${id}`}> <StyledButton onClick={props.onClick}>{textButton}</StyledButton> </ButtonNavLink>
    </>
    );
 }