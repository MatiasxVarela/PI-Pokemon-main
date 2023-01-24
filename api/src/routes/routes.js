const { Router } = require('express');
const router = Router()
const pokemons = require('./pokemons.routes')
const types = require('./types.routes')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

/*  Pokemon routes */

router.use('/pokemons', pokemons)

/* Types routes */

router.use('/types', types)

module.exports = router;
