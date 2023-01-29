import React from "react";
import {  orderPokemonsForType } from "../../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const StyledSelec = styled.select`
    margin: 20px 0px 20px 0px;
`;

export default function SelecPokemonType() {
    const types = useSelector(store => store.types)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(orderPokemonsForType(event.target.value))
    }

    return (
    <div>
        <label htmlFor="select">Order by type: </label>
        <StyledSelec name="select" onChange={handleChange}>
            <option value="anyType" >Any type</option>
            {
                types.length > 0 && types.map(
                    (type) => <option key={type.id} value={type.name}>
                        {type.name}
                    </option>
                )
            }
        </StyledSelec>
    </div>
    );
 }