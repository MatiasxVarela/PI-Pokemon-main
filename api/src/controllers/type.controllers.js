const { PokemonType } = require('../db')
const { getTypesFromApi } = require('../controllers/Util/GetApi')

/* Export the pokemons from the API to the database */

const apiToDb = async () => {
    if ((await PokemonType.findAll()).length !== 0){
        throw new Error('The types have already been exported from the API to the database.')
    }else {
        const types = await getTypesFromApi()
        types.forEach(async (element) => {
            await PokemonType.create({
                name: element
            })
        });
        return "Types createds."
    }

}

/* Get all pokemon types */

const getTypes = async () => {
    const types = await PokemonType.findAll({
        attributes: ["id","name"]
    })
    return types
}

module.exports = {
    apiToDb,
    getTypes
}