const axios = require('axios').default;

const getPokemons = async () => {
    const pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(data => data.data)
    return pokemons
}

const getPokemonsWithStats = async () => {
    let pokemons = await getPokemons()
    pokemons = await pokemons.results.map(pokemon => axios.get(pokemon.url)
    .then(data => {return {
        name: data.data.name,
        hp: data.data.stats[0].base_stat,
        attack: data.data.stats[1].base_stat,
        defense: data.data.stats[2].base_stat,
        speed: data.data.stats[5].base_stat,
        height: data.data.height,
        weight: data.data.weight
    }}))

    return  await Promise.all(pokemons)
}


module.exports = {
    getPokemons,
    getPokemonsWithStats
}