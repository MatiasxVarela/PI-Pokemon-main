import React from "react";
import togepi from "../../img/Togepi.png"
import styled from "styled-components";
import { useEffect, useState } from "react";
import HomeButton from "./HomeButton";

const StyledImg = styled.img`
    width: 300px;
    height: 300px;
    @media (max-width: 600px) {
        width: 340px;
        height: 340px;
        margin-bottom: 20px;
    }
`;

const StyledH2 = styled.h2`
    font-family: 'OldPokemonFont';
    margin-top: 80px;
    margin-bottom: 40px;
`;

export default function ErrorCard(props) {
    const [windowWidth, setWindowWidth] = useState(window.screen.width);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setWindowWidth]);
    return (
        <>
            <StyledH2>{`Pokemon ${props.name} does not exist.`}</StyledH2>
            <StyledImg src={togepi} alt="" />
            {windowWidth <= 600
            && <HomeButton></HomeButton>
            }
        </>
    );
 }