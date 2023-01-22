const { Router } = require('express');
const routerTypes = Router()

routerTypes.get('/', async (req,res )=> {

    try {
        
    } catch (error) {
        res.status(400).json({err: error.message})
    }
})

module.exports = routerTypes;