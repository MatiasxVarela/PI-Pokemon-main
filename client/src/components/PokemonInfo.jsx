import userEvent from "@testing-library/user-event";
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from "react"
import InfoCard from "./InfoCard";

export default function PokemonInfo() {
    const [pokemon, setPokemon] = useState({});
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const name = query.get("name").toLowerCase()
    const id = query.get("id")
    let url;

    useEffect(() => {
        if (name !== null){
            url = `http://localhost:3001/pokemons?name=${name}`
         } else if (id !== null){
             url = `http://localhost:3001/pokemons/${id}`
         }
        fetch(url)
            .then((response) => response.json())
            .then((data) => setPokemon(data));
      }, []);

    return (
    <div>
        <InfoCard pokemon={pokemon}/>
    </div>
    );
 }