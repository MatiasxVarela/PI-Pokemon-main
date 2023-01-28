import React from "react";
import styled from 'styled-components';
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const DivNavBar = styled.div`
    padding-top: 15px;
    height: 105px;
    background-color: red;
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
            <ImgLogo src="https://assets.stickpng.com/images/612ce4761b9679000402af1c.png" alt="" />
        </Link>
        <SearchBar/>
    </DivNavBar>
    );
 }