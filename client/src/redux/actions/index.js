/* Defined action types */

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_PAGE_ID = "GET_PAGE_ID"
export const GET_POKEMON_IN_ORDER = "GET_POKEMON_INORDER"
export const ORDER_POKEMONS_IN_REVERSE = "ORDER_POKEMONS_IN_REVERSE"
export const POKEMONS_SORTED_ALPHABETICALLY ="POKEMONS_SORTED_ALPHABETICALLY"
export const GET_USER_CREATED_POKEMONS = "GET_USER_CREATED_POKEMONS"
export const RESET_ALL_FILTERS = "RESET_ALL_FILTERS"
export const GET_POKEMONS_TYPES = "GET_POKEMONS_TYPES"
export const ORDER_POKEMONS_FOR_TYPE = "ORDER_POKEMONS_FOR_TYPE"


export const getAllPokemons = () => async (dispatch) => {
        const res = await fetch('http://localhost:3001/pokemons');
        const data = await res.json();
        dispatch({
            type: GET_ALL_POKEMONS,
            payload: data
        });
};

export const getPokemonsTypes = () => async (dispatch) => {
        const res = await fetch('http://localhost:3001/types');
        const data = await res.json();
        dispatch({
            type: GET_POKEMONS_TYPES,
            payload: data
        });
}

export const getPageId = (id) => {
    return {
        type: GET_PAGE_ID,
        payload: id
    }
}

export const getPokemonsInOrder = (pokemons) => {
    return {
        type: GET_POKEMON_IN_ORDER,
        payload: pokemons
    }
}

export const orderPokemonsInReverse = () => {
    return {
        type: ORDER_POKEMONS_IN_REVERSE
    }
}

export const pokemonsSortedAlphabetically = () => {
    return {
        type: POKEMONS_SORTED_ALPHABETICALLY,
    }
}

export const getUserCreatedPokemons = () => {
    return {
        type: GET_USER_CREATED_POKEMONS,
    }
}

export const resetAllFilters = () => {
    return {
        type: RESET_ALL_FILTERS,
    }
}

export const orderPokemonsForType = (type) => {
    return {
        type: ORDER_POKEMONS_FOR_TYPE,
        payload: type
    }
}