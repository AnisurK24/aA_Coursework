import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
// import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
// import { fetchAllPokemon } from './util/api_util';
// import { selectAllPokemon } from './reducers/selectors';

import configureStore from './store/store';

// import {HashRouter, Route} from "react-router-dom";
// import { Provider } from 'react-redux';
// import PokemonIndexContainer from './components/pokemon/pokemon_index_container';

// window.receiveAllPokemon = receiveAllPokemon;
// window.fetchAllPokemon = fetchAllPokemon;
// window.requestAllPokemon = requestAllPokemon;
// window.selectAllPokemon = selectAllPokemon;

// const Root = ({ store }) => (
//     <Provider store={store}>
//         <HashRouter>
//             <Route path="/" component={PokemonIndexContainer} />
//         </HashRouter>
//     </Provider>
// );


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, root);
});