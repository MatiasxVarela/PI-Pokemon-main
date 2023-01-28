import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const HomeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/sword-shield/pokemon-in-the-wild.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
`;

const StartButton = styled.button`
    transform: scale(300%);
`;

export default function Home() {


    return (
    <HomeDiv>
        <NavLink to={`/home/1`}> <StartButton>{"Start"}</StartButton> </NavLink>
    </HomeDiv>
    );
 }