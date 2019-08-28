import { connect } from 'react-redux';
import { selectPokeItems } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
    const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId];
    // debugger;
    return {
        pokemon,
        items: selectPokeItems(state, pokemon)
    };
};


const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
    // dispatch requestAllPokemon action.
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonDetail);