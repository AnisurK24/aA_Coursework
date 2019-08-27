import { combineReducers } from 'redux';

import pokemonReducer from './pokemon_reducer';
import items from './items_reducer';


const entitiesReducer = combineReducers({
    pokemon: pokemonReducer,
});

export default entitiesReducer;