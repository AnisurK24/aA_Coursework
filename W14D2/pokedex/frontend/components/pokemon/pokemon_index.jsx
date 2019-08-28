import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container'


class PokemonIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllPokemon();
    }
    
    render() {
        const pokemon = this.props.pokemon;
        // debugger;
        const pokemonItems = pokemon.map(poke => (
            <PokemonIndexItem key={poke.id} pokemon={poke} />
        ));

        return (

            <section className="pokedex">
                <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
                <ul>{pokemonItems}</ul>
            </section>

            // <ul>
            //     {pokemon.map(poke => 
            //         <li key={poke.id} pokemon={poke}>
            //                 <span>{poke.id}</span>
            //                 <img src={poke.image_url} alt={poke.name} />
            //                 <span>{poke.name}</span>
            //         </li>
            //         )}
            // </ul>
        );
    }
}


export default PokemonIndex;