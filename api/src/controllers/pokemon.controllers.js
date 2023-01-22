const { getPokemons, getPokemonsWithStats } = require('./Util/GetApi.js')


/* Get all pokemons */

const getAllPokemons = async () =>{
    const pokemons = await getPokemonsWithStats()
    return pokemons
}

module.exports  = getAllPokemons;

getAllPokemons()