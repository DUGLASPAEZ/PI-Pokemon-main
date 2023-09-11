import React, {useEffect} from 'react'
import Cards from "../../Components/CardsPage/Cards"
import { allPokemons } from '../../Redux/Actions/action'
import { useDispatch, useSelector } from 'react-redux'
import Search from '../../Components/SearchPage/Search'
import NavBar from '../../Components/NavBarPage/NavBar'

function Home() {

  const dispatch = useDispatch()
  const Pokemons = useSelector((state)=> state.Pokemons)

  useEffect(()=> {
  dispatch(allPokemons())

  }, [dispatch])

  return (
    <div>
      <NavBar/>
    
      <Search/>
      <Cards Pokemons = {Pokemons}></Cards>
    </div>
  )
}

export default Home