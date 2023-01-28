import { useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from "react"
import InfoCard from "./InfoCard";

export default function PokemonInfo() {
    const [pokemon, setPokemon] = useState({});
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    let name = query.get("name")
    if (name !== null) name = name.toLowerCase()
    const id = query.get("id")
    const url = useRef(null);

    useEffect(() => {
        if (name !== null){
            url.current = `http://localhost:3001/pokemons?name=${name}`
         } else if (id !== null){
             url.current = `http://localhost:3001/pokemons/${id}`
         }
        fetch(url.current)
            .then((response) => response.json())
            .then((data) => setPokemon(data));
      }, [id,name]);

    return (
    <div>
        <InfoCard pokemon={pokemon}/>
    </div>
    );
 }