import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {MainStore} from '../index'

import {Getpoken} from '../actions/Pokeactions'

const Dashboard = () => {
    const [pokenvalues, setPokenvalues] = useState("")
    const pokemonstate = useSelector((state :MainStore) => state.pokemon)
    const dispatch = useDispatch()

const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) =>{
    setPokenvalues(event.target.value)

}
const handleSubmit = () =>{
    dispatch(Getpoken(pokenvalues))
}
console.log("pokenmon state",pokemonstate );

    return (
        <div>
            <h1>dashboard</h1>
            <input type="text" value={pokenvalues} onChange={handleChange}/>
            <button onClick={handleSubmit}>submit</button>
            <div>
    {pokemonstate.pokemon && (
        <div>
            <img src={pokemonstate.pokemon.sprites.front_default} alt='bvxc' />
    {pokemonstate.pokemon.abilities.map(ability => <p >{ability.ability.name}</p>)}
        </div>
    )}
            </div>
        </div>
    )
}

export default Dashboard
