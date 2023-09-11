import React from 'react'
import { useSelector } from 'react-redux'
//import Card from '../CardPage/Card'


function Pokemon() {

    const pokemonName = useSelector((state)=>state.PokemonName)
    console.log(pokemonName)
  return (
    <div>
        {
            pokemonName && pokemonName.map((e)=> (
           // eslint-disable-next-line jsx-a11y/alt-text
           <img src= {e.image}></img>
            ))
        }
    </div>
  )
}

export default Pokemon