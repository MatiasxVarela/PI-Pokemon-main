import { GET_ALL_POKEMONS, GET_PAGE_ID} from "../actions";

/* Define redux initial state */

const initialState = {
    pokemons: [],
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