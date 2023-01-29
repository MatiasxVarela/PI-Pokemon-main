import React from "react";
import styled from 'styled-components';
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import navLogo from "../../img/612ce4761b9679000402af1c.png"

const DivNavBar = styled.div`
    padding-top: 15px;
    height: 10.5vh;
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
    display: flex;
    position: absolute;
    margin-left: 7.5%;
    margin-top: -0.1%;
`;

export default function NavBar() {

    return (
    <DivNavBar>
        <Link to="/home">
            <ImgLogo src={navLogo} alt="" />
        </Link>
        <SearchBar/>
    </DivNavBar>
    );
 }