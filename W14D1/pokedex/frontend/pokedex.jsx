import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
// import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
// import { fetchAllPokemon } from './util/api_util';
// import { selectAllPokemon } from './reducers/selectors';

import configureStore from './store/store';

// window.receiveAllPokemon = receiveAllPokemon;
// window.fetchAllPokemon = fetchAllPokemon;
// window.requestAllPokemon = requestAllPokemon;
// window.selectAllPokemon = selectAllPokemon;


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, root);
});