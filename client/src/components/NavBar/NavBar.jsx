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
    border: solid #FFD700;
    background-color: #4C6DF2;
    box-shadow: 0px 8px 22px rgba(0, 0, 0, 0.6);
    border-width: 0px 0px 2px 0px;
    border-radius: 0px 0px 5px 5px;
`;

const ImgLogo = styled.img`
    width: 260px;
    height: 120px;
    object-fit: cover;
    object-position: bottom;
    margin: 5px 0px 0px 125px;
    cursor: pointer;
`;

export default function NavBar() {
    const navigate = useNavigate()

    const handleLogoOnClick = () => {
        setTimeout(() => {
            navigate("/home/1")
        }, 85);
    }

    const handleFormOnClick = () => {
        setTimeout(() => {
            navigate("/form")
        }, 85);
    }

    return (
    <DivNavBar>
        <ImgLogo src={navLogo} onClick={handleLogoOnClick} alt="A pokemon logo" />
        <SearchBar/>
        <button onClick={handleFormOnClick}>Buenas</button>
        
    </DivNavBar>
    );
 }