

export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL="POKEMON_FAIL";
export const POKEMON_SUCCESS="POKEMON_SUCCESS";


// ts types 

export interface pokomenType {
    abilities :PokeMonAbility[],   //types we are assigning , it is a array so we gave []
    sprites:PokemonSprites,     //this is not an array
    Starts:PokemonStarts[]
}
export interface PokeMonAbility {
    ability:{
        name: string;
        url: string;
    }
   
}
export type PokemonSprites = {
    front_default:string;
}

// array and object type
export type PokemonStarts = {
    base_stat:number;
    stat : {
        name:string
    }
}

/////////
//action createters
export interface pokemonLoading {
    type:typeof POKEMON_LOADING
}

export interface pokemonFail { 
     type:typeof POKEMON_FAIL
    
}
export interface pokemonSuccess {
    type:typeof POKEMON_SUCCESS,
    payload:pokomenType
    
}

export type pokemondefaulttypes= pokemonSuccess | pokemonFail | pokemonLoading