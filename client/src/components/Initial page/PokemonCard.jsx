import React from "react";

export default function PokemonCard(props) {
    return (
    <div>
        <h1>{props.name}</h1>
        <img src={props.sprite} alt="" />
        {!!props.pokemonTypes && !props.pokemonTypes[1] && <p>{`Type: ${props.pokemonTypes[0].name}.`}</p>}
        {!!props.pokemonTypes && !!props.pokemonTypes[1] && <p>{`Type: ${props.pokemonTypes[0].name}, ${props.pokemonTypes[1].name}.`}</p>}
        <hr></hr>
    </div>
    );
 }