const axios = require('axios').default;

/* Get 40 pokemons */

const getPokemons = async () => {
    const pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40')
    .then(data => data.data)
    return pokemons
}

/* Get atributes for 40 pokemons */

const getPokemonsWithStats = async () => {
    let pokemons = await getPokemons()
    pokemons = await pokemons.results.map(pokemon => axios.get(pokemon.url)
    .then(data => {
        const pokemon = {
        id: data.data.id,
        name: data.data.name,
        sprite: data.data.sprites.other["official-artwork"]["front_default"],
        hp: data.data.stats[0].base_stat,
        attack: data.data.stats[1].base_stat,
        defense: data.data.stats[2].base_stat,
        speed: data.data.stats[5].base_stat,
        height: data.data.height,
        weight: data.data.weight,
        type1: data.data.types[0].type.name,
    }

    data.data.types.forEach((element, index) => {
        pokemon["type" + (index + 1)] = element.type.name
    });

    return pokemon
}))

    return  await Promise.all(pokemons)
}

/* Get all pokemons types from api */

const getTypesFromApi = async () => {
    let types = await axios.get('https://pokeapi.co/api/v2/type')
    .then(data => data.data.results)
    types = types.map(type => type.name)
    return types
}

module.exports = {
    getPokemons,
    getPokemonsWithStats,
    getTypesFromApi
}
