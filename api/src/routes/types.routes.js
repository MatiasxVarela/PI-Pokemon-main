const { Router } = require('express');
const routerTypes = Router()
const { apiToDb, getTypes } = require('../controllers/type.controllers')

/* Get all types */

routerTypes.get('/', async (req,res )=> {

    try {
        const types = await getTypes()
        res.json(types)
    } catch (error) {
        res.status(400).json({err: error.message})
    }
})

/* Export the pokemons from the API to the database */
/* ⚠️⚠️ Important to only use when the database is reset ⚠️⚠️*/

routerTypes.post('/apiToDb', async (req,res )=> {

    try {
        const types = await apiToDb()
        res.send(types)
    } catch (error) {
        res.status(400).json({err: error.message})
    }
})

module.exports = routerTypes;