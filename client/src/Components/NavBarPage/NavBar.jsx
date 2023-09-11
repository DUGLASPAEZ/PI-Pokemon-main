import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
  return (
    <div className = 'nav-cont'>
        <div className = 'nav-img-cont'>
            <Link to= "/about"><img src = "https://wallpaperheart.com/wp-content/uploads/2018/04/cool-pokemon-wallpapers-1.jpg" alt = "logo "/>Abaut</Link>
        </div>
           <div className = 'nav-link-cont'> 
               <Link className= "nav-link" to = "/home" ><img src = "https://wallpaperheart.com/wp-content/uploads/2018/04/cool-pokemon-wallpapers-1.jpg" alt = ""/><button>Home</button></Link>
               <Link className= "nav-link" to = "/form" ><img src = "https://wallpaperheart.com/wp-content/uploads/2018/04/cool-pokemon-wallpapers-1.jpg" alt = ""/>Form</Link>
               <Link className='nav-link'  to = ""><img src = "https://wallpaperheart.com/wp-content/uploads/2018/04/cool-pokemon-wallpapers-1.jpg" alt = ""/>Inicio</Link>
          </div>
          <div className='pokemonslogo'>
          <img src = "https://www.nintenderos.com/wp-content/uploads/2015/09/Pokemon-GO.png" alt = "logo"/>
          </div>
    </div>
  )
}

export default NavBar