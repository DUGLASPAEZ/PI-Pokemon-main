import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allPokemons } from '../../Redux/Actions/action';
import Cards from '../../Components/CardsPage/Cards';
import Search from '../../Components/SearchPage/Search';
import NavBar from '../../Components/NavBarPage/NavBar';
import '../HomePage/Home.css';

function Home() {
  const dispatch = useDispatch();
  const POKEMON_PER_PAGE = 12;

  // Estados desde Redux
  const pokemons = useSelector((state) => state.Pokemons);


  // Estado local para la paginación
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el índice de inicio y final de la página actual
  const startIndex = (currentPage - 1) * POKEMON_PER_PAGE;
  const endIndex = startIndex + POKEMON_PER_PAGE;
  const paginatedPokemons = pokemons.slice(startIndex, endIndex);

  useEffect(() => {
    // Cargar todos los Pokémon cuando el componente se monta
    dispatch(allPokemons());
  }, [dispatch]);

  // Función para cambiar de página
  const handlePageChange = (newPage) => {
    // Calcular la nueva página
    const nextPage = currentPage + newPage;

    // Asegurarse de que la nueva página esté dentro de los límites válidos
    if (nextPage >= 1 && nextPage <= Math.ceil(pokemons.length / POKEMON_PER_PAGE)) {
      setCurrentPage(nextPage);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="imgcont">
        <Search />
        <Cards Pokemons={paginatedPokemons} />
        {/* Botones de paginación */}
        <div className="pagination">
          <button  className='buttonpaginate' onClick={() => handlePageChange(-1)}>Anterior</button>
          <span className='text'>Página {currentPage}</span>
          <button className='buttonpaginate' onClick={() => handlePageChange(1)}>Siguiente</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
