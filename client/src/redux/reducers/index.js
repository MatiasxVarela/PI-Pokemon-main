import { 
  GET_ALL_POKEMONS,
  GET_PAGE_ID,
  GET_POKEMON_IN_ORDER,
  ORDER_POKEMONS_IN_REVERSE,
  POKEMONS_SORTED_ALPHABETICALLY,
  GET_USER_CREATED_POKEMONS,
  RESET_ALL_FILTERS,
  GET_POKEMONS_TYPES,
  ORDER_POKEMONS_FOR_TYPE
} from "../actions";

import { arraySortedByValues } from "./reduceDependency";

/* Define redux initial state */

const initialState = {
    pokemons: [],
    pokemonsInOrder: [],
    types: [],
    pokemonsSortValues: {
      alphabetically: false,
      types: "anyType",
      id: true,
      reverse: false,
      CreatedByUser: false
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
      
      case GET_POKEMONS_TYPES: {
        return {
          ...state,
          types: action.payload
        }
      }

        case GET_POKEMON_IN_ORDER:
          return {
            ...state,
            pokemonsInOrder: action.payload
          }

        case RESET_ALL_FILTERS: {
          return {
            ...state,
            pokemonsSortValues: initialState.pokemonsSortValues,
            pokemonsInOrder: arraySortedByValues(state.pokemons, initialState.pokemonsSortValues)
          }
        }

        case ORDER_POKEMONS_FOR_TYPE: {
          return {
            ...state,
            pokemonsSortValues: { ...state.pokemonsSortValues, types: action.payload},
            pokemonsInOrder: arraySortedByValues(state.pokemons, { ...state.pokemonsSortValues, types: action.payload})
          }
        }
        case GET_USER_CREATED_POKEMONS:
          if (state.pokemonsSortValues.CreatedByUser === false){
            return {
              ...state,
              pokemonsSortValues: { ...state.pokemonsSortValues,CreatedByUser: true},
              pokemonsInOrder: arraySortedByValues(state.pokemons, {...state.pokemonsSortValues, CreatedByUser: true})
            }
          }  else {
            return {
              ...state,
              pokemonsSortValues: { ...state.pokemonsSortValues,CreatedByUser: false},
              pokemonsInOrder: arraySortedByValues(state.pokemons, {...state.pokemonsSortValues, CreatedByUser: false})
            }
          }

        case ORDER_POKEMONS_IN_REVERSE:
          if (state.pokemonsSortValues.reverse === true){
            return {
              ...state,
              pokemonsSortValues: {...state.pokemonsSortValues, reverse: false},
              pokemonsInOrder: arraySortedByValues(state.pokemons, {...state.pokemonsSortValues, reverse: false})
            }
          } else {
            return {
              ...state,
              pokemonsSortValues: {...state.pokemonsSortValues, reverse: true},
              pokemonsInOrder: arraySortedByValues(state.pokemons, {...state.pokemonsSortValues, reverse: true})
            }
          }

        case POKEMONS_SORTED_ALPHABETICALLY:
          if (state.pokemonsSortValues.alphabetically === false){
            return {
              ...state,
              pokemonsSortValues: { ...state.pokemonsSortValues, alphabetically: true, id: false},
              pokemonsInOrder: arraySortedByValues(state.pokemons, { ...state.pokemonsSortValues, alphabetically: true, id: false})
            }
          }else{
            return {
              ...state,
              pokemonsSortValues: { ...state.pokemonsSortValues, alphabetically: false, id: true},
              pokemonsInOrder: arraySortedByValues(state.pokemons,{ ...state.pokemonsSortValues, alphabetically: false, id: true})
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