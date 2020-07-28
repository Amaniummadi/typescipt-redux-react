import {pokomenType,pokemondefaulttypes,POKEMON_SUCCESS,POKEMON_FAIL,POKEMON_LOADING} from '../actions/PokeTypes'

// type for initial state 

interface DefaultSateI{
    loading: boolean,
    pokemon?:pokomenType   // opitional value

}

// initial state
const defaultSate: DefaultSateI ={
    loading:false
}

// reducer
const pokemonReducer = (state :DefaultSateI = defaultSate,action :pokemondefaulttypes) : DefaultSateI =>{
            switch(action.type){
                case POKEMON_LOADING:
                    return{
                        ...state,
                        loading:true
                    }
                case POKEMON_FAIL:
                    return{
                        loading:false
                    }
                case POKEMON_SUCCESS:
                    return{
                        loading:false,
                        pokemon:action.payload
                    }
                    default:
                        return state
            }
   
}

export default pokemonReducer