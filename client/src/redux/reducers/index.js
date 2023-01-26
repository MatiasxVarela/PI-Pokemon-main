import { 
  GET_ALL_POKEMONS,
  GET_PAGE_ID,
  GET_POKEMON_IN_ORDER,
  ORDER_POKEMONS_IN_REVERSE,
  POKEMONS_SORTED_ALPHABETICALLY
} from "../actions";

import { arraySortedByValues } from "./reduceDependency";

/* Define redux initial state */

const initialState = {
    pokemons: [],
    pokemonsInOrder: [],
    pokemonsSortValues: {
      alphabetically: false,
      types: false,
      id: true,
      reverse: false
    },
    pageId: 0
};


/* Define redux sreducer */

const reducer = (state = initialState, action) => {
    switch (action.type) {

      case GET_ALL_POKEMONS:
        return {
            ...state,
            pokemons: action.payload
          }

        case GET_POKEMON_IN_ORDER:
          return {
            ...state,
            pokemonsInOrder: action.payload
          }

        case ORDER_POKEMONS_IN_REVERSE:
          if (state.pokemonsSortValues.reverse === true){
            return {
              ...state,
              pokemonsSortValues: {...state.pokemonsSortValues, reverse: false},
              pokemonsInOrder: arraySortedByValues(action.payload, {...state.pokemonsSortValues, reverse: false})
            }
          } else {
            return {
              ...state,
              pokemonsSortValues: {...state.pokemonsSortValues, reverse: true},
              pokemonsInOrder: arraySortedByValues(action.payload, {...state.pokemonsSortValues, reverse: true})
            }
          }

        case POKEMONS_SORTED_ALPHABETICALLY:
          if (state.pokemonsSortValues.alphabetically === false){
            return {
              ...state,
              pokemonsSortValues: { ...state.pokemonsSortValues, alphabetically: true, id: false},
              pokemonsInOrder: arraySortedByValues(action.payload, { ...state.pokemonsSortValues, alphabetically: true, id: false})
            }
          }else{
            return {
              ...state,
              pokemonsSortValues: { ...state.pokemonsSortValues, alphabetically: false, id: true},
              pokemonsInOrder: arraySortedByValues(action.payload,{ ...state.pokemonsSortValues, alphabetically: false, id: true})
            }
          }

        case GET_PAGE_ID:
          return {
            ...state,
            pageId: action.payload
          }
  

        
      default:
        return state;
    }
  };

export default reducer;