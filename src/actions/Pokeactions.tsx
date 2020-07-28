import {Dispatch} from 'redux'

import {pokemondefaulttypes,POKEMON_LOADING,POKEMON_FAIL,POKEMON_SUCCESS} from './PokeTypes'
import axios from 'axios'



export  const Getpoken = (pokemon:string)=> async (dispatch:Dispatch<pokemondefaulttypes>) =>{
//fetch api data
    try{
        dispatch({
            type:POKEMON_LOADING
        })
        const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        dispatch({
            type:POKEMON_SUCCESS,
            payload:res.data
        })
    }
    catch(e){
        dispatch({
            type:POKEMON_FAIL
        })
    }

}