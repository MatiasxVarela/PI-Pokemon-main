import React from "react";
import MapCards from "./Cards/MapCards"
import NavigatePageButtons from "./Navigate/NavigatePageButtons";
import styled from "styled-components";
import { useSelector } from "react-redux";

const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export default function Pagination() {
    const pokemonsLength = useSelector(store => store.pokemonsInOrder).length

    return (
    <DivStyled>
     <MapCards/>
        {pokemonsLength > 12 && <NavigatePageButtons/>}
    </DivStyled>
    );
 }