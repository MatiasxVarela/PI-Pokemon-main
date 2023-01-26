const { Router } = require('express');
const routerPokemons = Router()
const { getAllPokemons, postPokemon, getPokemonForId,getPokemonForName } = require('../controllers/pokemon.controllers')

/* Get pokemons */

routerPokemons.get('/', async (req,res )=> {
    const { name } = req.query
    
    try {
        if (name !== undefined){
            const pokemon = await getPokemonForName(name)
            res.json(pokemon)
        } else {
            pokemons = await getAllPokemons()
            res.json(pokemons)
    }
    } catch (error) {
        res.status(400).json({err: error.message})
    }
})

/* Get pokemons for id param */

routerPokemons.get('/:id', async (req,res )=> {
    const { id } =  req.params

    try {
        const pokemon = await getPokemonForId(id)
        res.json(pokemon)
    } catch (error) {
        res.status(400).json({err: error.message})
    }
})

/* Post pokemon */

routerPokemons.post('/', async (req,res )=> {
    const { name,sprite, hp, attack, defense, speed, height,  weight, types} = req.body

    try {
        const pokemon = await postPokemon(name, sprite, hp, attack, defense, speed, height, weight, types)
        res.json(pokemon)
    } catch (error) {
        res.status(400).json({err: error.message})
    }
})

module.exports = routerPokemons;