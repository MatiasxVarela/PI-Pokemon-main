import React from "react";
import {  orderPokemonsForType } from "../../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const StyledSelect = styled.select`
    &:hover {
        transform: scale(1.03);
    }
    font-family: 'OldPokemonFont';
    font-size: 12px;
    margin: 0px 0px 0px 0px;
    font-size: 16px;
    padding: 10px;
    background-color: rgba(76, 109, 242, 0.83);
    border: 2px solid rgba(255, 215, 0, 0.83);
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.6);
    border-radius: 13px;
    transition: all 0.4s;
`;

const StyledH4 = styled.h4`
    font-family: 'OldPokemonFont';
`;

export default function SelectPokemonType() {
    const types = useSelector(store => store.types)
    const typesFilter = useSelector(store => store.pokemonsSortValues.types)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setTimeout(() => {
            dispatch(orderPokemonsForType(event.target.value))
        }, 125);
    }

    return (
    <>
        <StyledH4>Order by type:</StyledH4>
        <StyledSelect name="select" onChange={handleChange}>
            <option value="anyType" >Any type</option>
            {
                types.length > 0 && types.map(
                    (type) => 
                    <option 
                        key={type.id} 
                        selected={type.name === typesFilter}
                        value={type.name}
                        >
                        {type.name}
                    </option>)
            }
        </StyledSelect>
    </>
    );
 }