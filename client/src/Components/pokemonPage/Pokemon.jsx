import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Importa Link para crear enlaces de navegación
import "../../Components/pokemonPage/Pokemon.css"

function Pokemon() {
    const pokemonList = useSelector((state) => state.PokemonName);

    return (
        <div className='pokemoncontainer'>
            <Link to="/home"> {/* Enlace a la página de inicio */}
                <button className='buttonstyle'>Back to Home</button>
            </Link>
            {pokemonList &&
                pokemonList.map((pokemon) => (
                    <div key={pokemon.id}>
                        <img  src={pokemon.image} alt={pokemon.name} />
                        <p className='name'>{pokemon.name}</p>
                    </div>
                ))}
        </div>
    );
}

export default Pokemon;
