import React from 'react';
// import { Link } from 'react-router-dom';
// import { requestAllPokemon } from '../../actions/pokemon_actions';


class PokemonIndex extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.requestAllPokemon();
    }


    render() {
        const pokemon = this.props.pokemon;
        // pokemon.forEach(pokemon => 
        //     <li>{pokemon.name}
            
        //     <img src={pokemon.img_url}/>
            
        //     </li>
        //     )

        return (

            <ul>
                {pokemon.map(poke => 
                    <li className="pokemon-index-item" key={poke.id} pokemon={poke}>
                        {/* <Link to={`/pokemon/${pokemon.id}`}> */} 
                            <span>{poke.id}</span>
                            <img src={poke.image_url} alt={poke.name} />
                            <span>{poke.name}</span>
                        {/* </Link> */} 
                    </li>
                    )}
            </ul>

            // <div>{pokemon}</div>
            // <section className="pokedex">
                // {/* <Route exact path="/" component={PokemonFormContainer} /> */}
                // <Route
                    // path="/pokemon/:pokemonId"
                    // component={PokemonDetailContainer}
                // />
                // <ul>
                    // {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
                // </ul>
            // </section>
        );
    }
}


export default PokemonIndex