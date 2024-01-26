import React from "react";
import styled from 'styled-components';
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import navLogo from "../../img/612ce4761b9679000402af1c.png"

const DivNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    height: 110px;
    width: 100%;
    border: solid #FFD700;
    background-color: #4C6DF2;
    box-shadow: 0px 8px 22px rgba(0, 0, 0, 0.6);
    border-width: 0px 0px 2px 0px;
    border-radius: 0px 0px 5px 5px;
    @media (max-width: 600px) {
    }
`;

const ImgLogo = styled.img`
    width: 260px;
    height: 120px;
    object-fit: cover;
    object-position: bottom;
    margin: 5px 0px 0px 125px;
    cursor: pointer;
    @media (max-width: 600px) {
        display: none;
    }
`;

const StyledButton = styled.button`
    &:hover {
        transform: scale(1.1);
    }
     font-family: 'OldPokemonFont';
     font-size: 15px;
     font-weight: bold;
     width: 130px;
     max-width: 130px;
     min-width: 130px;
     height: 50px;
     margin: auto 45px auto auto;
     background-color: rgba(255, 215, 0,9);
     border: 2px solid rgba(76, 109, 242, 0.9);
     box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.6);
     border-radius: 8px;
     transform: translateY(0.5px);
     transition: transform 0.6s;
     cursor: pointer;
     @media (max-width: 600px) {
        display: none;
    }
`;

export default function NavBar() {
    const navigate = useNavigate()

    const logoOnClick = () => {
        setTimeout(() => {
            navigate("/home/1")
        }, 85);
    }

    const formOnClick = () => {
        setTimeout(() => {
            navigate("/form")
        }, 85);
    }

    return (
    <DivNavBar>
        <ImgLogo src={navLogo} onClick={logoOnClick} alt="A pokemon logo" />
        <SearchBar/>
        <StyledButton onClick={formOnClick}>Create a Pokemon</StyledButton>
        
    </DivNavBar>
    );
 }