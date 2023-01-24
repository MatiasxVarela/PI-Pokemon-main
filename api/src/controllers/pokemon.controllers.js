const { Pokemon, PokemonType } = require('../db')

const { getPokemonsWithStats } = require('./Util/GetApi.js')

/* Get all pokemons */

const getAllPokemons = async () =>{
    const pokemonsApi = await getPokemonsWithStats()
    const pokemonsDb = await Pokemon.findAll({
        attributes: ["id","name","sprite", "hp", "attack", "defense", "speed", "height", "weight"],
        include: [{
            model: PokemonType,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }]
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

const postPokemon = async (name, hp, attack, defense, speed, height,  weight, types) =>{
    if (name === undefined) throw new Error("name is not defined")
    if (hp === undefined) throw new Error("hp is not defined")
    if (attack === undefined) throw new Error("attack is not defined")
    if (defense === undefined) throw new Error("defense is not defined")
    if (speed === undefined) throw new Error("speed is not defined")
    if (height === undefined) throw new Error("heigth is not defined")
    if (weight === undefined) throw new Error("weight is not defined")
    if (types === undefined || types.length === 0) throw new Error("types is not defined")

    const pokemonsLength = (await getAllPokemons()).length
    const newPokemon = await Pokemon.create({
        id: pokemonsLength + 1,
        name,
        hp,
        attack, 
        defense, 
        speed, 
        height,  
        weight,
    })

    types.forEach(async (type) => {
        const pokeType = await PokemonType.findOne({
            where: {name: type},
            default: {name}
          });
          await newPokemon.addPokemonType(pokeType);
    });

    return {newPokemon, types: types}
}

module.exports  = {
    getAllPokemons, 
    postPokemon,
    getPokemonForId,
    getPokemonForName
};