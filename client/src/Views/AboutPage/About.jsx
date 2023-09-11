import NavBar from '../../Components/NavBarPage/NavBar'
import  './About.css'

function About() {
  return (
    
    <div  className= "container">
      <NavBar/>
      <div className= "containerText">
        <p>Mi nombre es Duglas Paez. Natural de Venezuela, actualmente vivo en Peru. Siempre me atrajo la programación y estoy en proceso de lograr esa meta.</p>
        <p>Este proyecto hace parte de  una integración de todos los conocimientos adquiridos en Henry en la carrera Full Stack Developer</p>
        <p>Para este proyecto se están aplicando las tecnologías de HTML, CSS, JS, REACT, REACT-REDUX, NODE JS, SEQUELIZE, POSTGRESQL .</p>
        <p>La API consumida para este proyecto se encuentra en <a href="https://pokeapi.co/api/v2/pokemon" target="_blank" rel="noreferrer">PokeApi</a></p>
      </div>

      <div className= "containerImg">
        
          <img className= "image" src={"https://external-preview.redd.it/AfshAWaqQt3a6q9QU2P1oWMvsUTOn1iPiLeEiqSdbi4.jpg?auto=webp&s=7a0423803bc1a2414a28029a5754dce94968413d"} alt="Logo de Henry" />
        
      </div>
    </div>
  )
}

export default About