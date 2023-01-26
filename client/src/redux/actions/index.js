/* Defined action types */

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_PAGE_ID = "GET_PAGE_ID"


export const getAllPokemons = () => async (dispatch) => {
        const res = await fetch('http://localhost:3001/pokemons');
        const data = await res.json();
        dispatch({
            type: GET_ALL_POKEMONS,
            payload: data
        });
};

export const getPageId = (id) => {
    return {
        type: GET_PAGE_ID,
        payload: id
    }
}

