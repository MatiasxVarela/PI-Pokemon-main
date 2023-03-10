import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from "../reducers";

/* Defined redux store */

const store = createStore(reducer, applyMiddleware(thunk));

export default store;