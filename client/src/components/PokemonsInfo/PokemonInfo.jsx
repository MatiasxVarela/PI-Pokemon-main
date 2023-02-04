import { useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from "react"
import axios from 'axios';
import InfoCard from "./InfoCard";
import styled from 'styled-components';
import ErrorCard from './ErrorCard';
import LoadCard from './LoadCard';

const DivBackgroundStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 88.4vh;
`;

const DivCardStyled = styled.div`
    width:  800px;
    height: 540px;
    margin-top: 55px;
    border: 2px solid rgba(255, 215, 0, 0.87);
    background-color: rgba(76, 109, 242, 0.87);
    box-shadow: 16px 16px 40px rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    margin-bottom: 8vh;
`

export default function PokemonInfo() {
    const [pokemon, setPokemon] = useState({});
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    let name = query.get("name")
    if (name !== null) name = name.toLowerCase()
    const id = query.get("id")
    const url = useRef(null);

    useEffect(() => {
        setPokemon({})
        if (name !== null){
            url.current = `/pokemons?name=${name}`
         } else if (id !== null){
             url.current = `/pokemons/${id}`
         }
        axios.get(url.current)
            .then(response => {setPokemon(response.data);})
            .catch(error => {setPokemon(error.response.data)}
            );
      }, [id,name]);

    return (
    <DivBackgroundStyled>
        <DivCardStyled>

            {
            Object.entries(pokemon).length === 0
            && <LoadCard/>
            }

            {
            pokemon.id !== undefined 
            && <InfoCard pokemon={pokemon}/>
            }

            {pokemon.err !== undefined 
            && <ErrorCard name={name} />
            }
            
        </DivCardStyled>
        
    </DivBackgroundStyled>
    );
 }