import { combineReducers } from 'redux'
import PokemonReducer from './PokemonReducer'
const rootStore=combineReducers({
    pokemon:PokemonReducer
})

export default rootStore;