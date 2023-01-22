const { Router } = require('express');
const routerPokemons = Router()
const getAllPokemons = require('../controllers/pokemon.controllers')

/* Get pokemons */

routerPokemons.get('/', async (req,res )=> {
    
    try {
        pokemons = await getAllPokemons()
        res.json(pokemons)
    } catch (error) {
        
    }
})

/* Get pokemons for id param */

routerPokemons.get('/:id', async (req,res )=> {

    try {
        
    } catch (error) {
        
    }
})

/* Post pokemon */

routerPokemons.post('/', async (req,res )=> {
    
    try {
        
    } catch (error) {
        
    }
})

module.exports = routerPokemons;