const { Pokemon } = require('../db')

const { getPokemonsWithStats } = require('./Util/GetApi.js')


/* Get all pokemons */

const getAllPokemons = async () =>{
    const pokemonsApi = await getPokemonsWithStats()
    const pokemonsDb = await Pokemon.findAll({
        attributes: ["id","name", "hp", "attack", "defense", "speed", "height", "weight"]
    })
    
    const pokemons = [...pokemonsApi, ...pokemonsDb]
    return pokemons
}

/* Get pokemon for id */

const getPokemonForId = async (id) => {
    const pokemons = await getAllPokemons()
    const pokemon = pokemons.find(pokemon => pokemon.id == (id))
    if (pokemon !== undefined){
        return pokemon
    } else {
        throw new Error("This Pokemon does not exist")
    }
}

/* Get pokemon for query name */

const getPokemonForName = async (name) => {
    const pokemons = await getAllPokemons()
    const pokemon = pokemons.find(pokemon => pokemon.name === name)
    if (pokemon !== undefined){
        return pokemon
    } else {
        throw new Error("This Pokemon does not exist")
    }
}

/* Post new pokemon */

const postPokemon = async (name, hp, attack, defense, speed, height,  weight) =>{
    const pokemonsLength = (await getAllPokemons()).length
    const newPokemon = await Pokemon.create({
        id: pokemonsLength + 1,
        name,
        hp,
        attack, 
        defense, 
        speed, 
        height,  
        weight
    })

    return newPokemon
}

module.exports  = {
    getAllPokemons, 
    postPokemon,
    getPokemonForId,
    getPokemonForName
};