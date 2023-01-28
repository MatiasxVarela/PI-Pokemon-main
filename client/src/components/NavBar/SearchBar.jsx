import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from "react";
import styled from 'styled-components';

const SearchBarDiv = styled.div`
    display: flex;
    flex-wrap: wrap;    
    justify-content: center;
`;


export default function SearchBar() {
    const [ searchValue, setSearchValue ] = useState("")
    const navigate = useNavigate()

    const handleOnChange = (event) => {
        setSearchValue(event.target.value);
    }

    const searchOnClick = () => {
        setSearchValue("")
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter"){
            navigate(`/pokemon?name=${searchValue.toLowerCase()}`)
            setSearchValue("")
        }
    }

    return (
    <SearchBarDiv>
        <label htmlFor="serarchPokemon">{"Search Pokemon:"}</label>
        <input name="searchPokemon" type="text" onKeyPress={handleKeyPress} onChange={handleOnChange} value={searchValue}/>
        <NavLink to={`/pokemon?name=${searchValue.toLowerCase()}`} ><button onClick={searchOnClick}>Search</button></NavLink>

    </SearchBarDiv>
    );
 }