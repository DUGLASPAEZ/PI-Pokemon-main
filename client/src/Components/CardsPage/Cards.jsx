import React from 'react'
import Card from "../CardPage/Card.jsx"
import "./Cards.css"

const Cards = ({Pokemons}) => {
  return (
    <div className='cards'>
      {
      Pokemons.map(Pokemon =>  <Card Pokemons={Pokemon} key={Pokemons.id}/>)
      }
    </div>
  )
    }

    export default Cards