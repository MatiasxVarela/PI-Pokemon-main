import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from "react";
import styled from 'styled-components';

const SearchBarDiv = styled.div`
    display: flex;
    flex-wrap: wrap;    
    align-items: center;
    margin: 0px 310px 0px 0px;
`;

const StyledInput = styled.input`
    &:focus {
        outline: none;
        transform: scale(1.03);
        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.6);
    }
    font-family: 'OldPokemonFont';
    font-size: 15px;
    font-weight: bold;
    height: 25px;
    padding: 6px 9px 6px 9px;
    background-color: rgba(76, 109, 242, 0.83);
    border: 2px solid rgba(255, 215, 0, 0.83);
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    transition: transform 0.4s;
`;

const StyledButton = styled.button`
    &:hover {
        transform: scale(1.1);
    }
     font-family: 'OldPokemonFont';
     font-size: 13px;
     font-weight: bold;
     width: 90px;
     height: 35px;
     margin: 0px 0px 0px 10px;
     background-color: rgba(255, 215, 0,9);
     border: 2px solid rgba(76, 109, 242, 0.9);
     box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.6);
     border-radius: 8px;
     transform: translateY(0.5px);
     transition: transform 0.6s;
     cursor: pointer;
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
            event.preventDefault();
            navigate(`/pokemon?name=${searchValue.toLowerCase()}`)
            setSearchValue("")
        }
    }

    return (
    <SearchBarDiv>
        <form  autoComplete="off">
            <StyledInput placeholder="Pidgey, kakuna..." name="searchPokemon" type="text" onKeyPress={handleKeyPress} onChange={handleOnChange} value={searchValue}/>
        </form>
        <NavLink to={`/pokemon?name=${searchValue.toLowerCase()}`} >
            <StyledButton onClick={searchOnClick}>
                Search
            </StyledButton>
        </NavLink>

    </SearchBarDiv>
    );
 }