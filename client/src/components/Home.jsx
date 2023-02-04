import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const HomeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

const StyledButton = styled.button`
    &:hover {
        transform: scale(1.1);
    }
     font-family: 'OldPokemonFont';
     font-size: 25px;
     font-weight: bold;
     width: 150px;
     height: 60px;
     background-color: rgba(255, 215, 0,9);
     border: 2px solid rgba(76, 109, 242, 0.9);
     box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.6);
     border-radius: 8px;
     transform: translateY(0.5px);
     transition: transform 0.6s;
     cursor: pointer;
`;

export default function Home() {
    const navigate = useNavigate()

    const handleOnClick = () => {
        setTimeout(() => {
            navigate("/home/1")
        }, 70);
    }

    return (
    <HomeDiv>
        <StyledButton onClick={handleOnClick} >{"Start"}</StyledButton>
    </HomeDiv>
    );
 }