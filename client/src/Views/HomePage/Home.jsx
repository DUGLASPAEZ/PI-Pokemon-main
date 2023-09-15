import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allPokemons, allTypes, orderName, orderAttack, orderOrigin, orderTypes } from '../../Redux/Actions/action';
import Cards from '../../Components/CardsPage/Cards';
import Search from '../../Components/SearchPage/Search';
import NavBar from '../../Components/NavBarPage/NavBar';
import '../HomePage/Home.css';

function Home() {
  const dispatch = useDispatch();
  const POKEMON_PER_PAGE = 12;

  // Estados desde Redux
  const pokemons = useSelector((state) => state.Pokemons);
  const Error = useSelector((state) => state.Failure);

  // Estado local para almacenar los datos actuales a mostrar en la página
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState(''); // Estado para el filtro actual
  const [showTypeFilter, setShowTypeFilter] = useState(false); // Estado para mostrar/ocultar el filtro de tipo

  useEffect(() => {
    // Cargar todos los Pokémon cuando el componente se monta
    dispatch(allPokemons());
    dispatch(allTypes());
  }, [dispatch]);

  // Efecto para actualizar 'currentData' cuando cambian los datos de Redux
  useEffect(() => {
    setCurrentData(pokemons);
  }, [pokemons]);

  // Efecto para manejar errores
  useEffect(() => {
    setError(Error);
  }, [Error]);

  // Función para cambiar de página
  const handlePageChange = (newPage) => {
    // Calcular la nueva página
    const nextPage = currentPage + newPage;

    // Asegurarse de que la nueva página esté dentro de los límites válidos
    if (nextPage >= 1 && nextPage <= Math.ceil(currentData.length / POKEMON_PER_PAGE)) {
      setCurrentPage(nextPage);
    }
  };

  // Función para aplicar el filtro seleccionado
  const applyFilter = (filterName) => {
    setFilter(filterName);
    setShowTypeFilter(false); // Ocultar el filtro de tipo al aplicar otro filtro

    switch (filterName) {
      case 'NameAsc':
        dispatch(orderName('Az'));
        break;
      case 'NameDesc':
        dispatch(orderName('Za'));
        break;
      case 'AttackAsc':
        dispatch(orderAttack('Min'));
        break;
      case 'AttackDesc':
        dispatch(orderAttack('Max'));
        break;
      case 'OriginDb':
        dispatch(orderOrigin('Created'));
        break;
      case 'OriginApi':
        dispatch(orderOrigin('Api'));
        break;
      case 'Todos':
        setCurrentData(pokemons);
        break;
      default:
        // Filtro por tipo
        dispatch(orderTypes(filterName));
        break;
    }
  };

  // Filtrar los Pokémon en base al filtro actual
  const filteredPokemons = () => {
    if (filter.startsWith('Type:')) {
      const type = filter.split(':')[1];
      return currentData.filter((pokemon) => pokemon.types.includes(type));
    }

    switch (filter) {
      case 'NameAsc':
        return currentData.slice().sort((a, b) => a.name.localeCompare(b.name));
      case 'NameDesc':
        return currentData.slice().sort((a, b) => b.name.localeCompare(a.name));
      case 'AttackAsc':
        return currentData.slice().sort((a, b) => a.attack - b.attack);
      case 'AttackDesc':
        return currentData.slice().sort((a, b) => b.attack - a.attack);
      case 'OriginDb':
        return currentData.filter((pokemon) => pokemon.createdInDb);
      case 'OriginApi':
        return currentData.filter((pokemon) => !pokemon.createdInDb);
      case 'Todos':
        return currentData;
      default:
        return currentData;
    }
  };

  // Obtener todos los tipos disponibles
  const availableTypes = [...new Set(pokemons.flatMap((pokemon) => pokemon.types))];

  // Calcular el índice de inicio y final de la página actual
  const startIndex = (currentPage - 1) * POKEMON_PER_PAGE;
  const endIndex = startIndex + POKEMON_PER_PAGE;

  return (
    <div>
      <NavBar />
      <div className="imgcont">
        <Search />
        {/* Botones de filtrado */}
        <div className="filter-buttons">
          <button className='buttomfilters' onClick={() => applyFilter('NameAsc')}>Nombre (A-Z)</button>
          <button className='buttomfilters' onClick={() => applyFilter('NameDesc')}>Nombre (Z-A)</button>
          <button className='buttomfilters' onClick={() => applyFilter('AttackAsc')}>Ataque (Menor a Mayor)</button>
          <button className='buttomfilters' onClick={() => applyFilter('AttackDesc')}>Ataque (Mayor a Menor)</button>
          <button className='buttomfilters' onClick={() => applyFilter('OriginDb')}>Origen (DB)</button>
          <button className='buttomfilters' onClick={() => applyFilter('OriginApi')}>Origen (API)</button>
          <button className='buttomfilters' onClick={() => applyFilter('Todos')}>Todos</button>
          {/* Botón para mostrar/ocultar filtro de tipo */}
          <button className='buttomfilters' onClick={() => setShowTypeFilter(!showTypeFilter)}>Tipo</button>
          {showTypeFilter && (
            <div className="type-filter">
              {availableTypes.map((type) => (
                <button className='buttomfilters'  key={`Type:${type}`} onClick={() => applyFilter(`Type:${type}`)}>
                  Tipo: {type}
                </button>
              ))}
            </div>
          )}
        </div>
        <Cards Pokemons={filteredPokemons().slice(startIndex, endIndex)} />
        {/* Botones de paginación */}
        <div className="pagination">
          <button className='buttonpaginate' onClick={() => handlePageChange(-1)}>Anterior</button>
          <span className='text'>Página {currentPage}</span>
          <button className='buttonpaginate' onClick={() => handlePageChange(1)}>Siguiente</button>
        </div>
        {/* Mostrar el error si está presente */}
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default Home;
