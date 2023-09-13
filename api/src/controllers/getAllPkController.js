const { Pokemons, Types } = require("../db");
const axios = require("axios");


// Función para obtener datos de Pokémon desde la API
const getPokemonsApi = async () => {
  try {
    // Realiza una solicitud GET a la API de Pokémon
    const api = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=300");

    // Obtiene la lista de resultados de la API
    const pkApi = await api.data.results;
    
    // Mapea cada resultado para obtener detalles específicos de cada Pokémon
    const dataPokemon = pkApi.map(async (pokemon) => {
      const info = await axios.get(pokemon.url);
      const pk = info.data;
      return {
        id: pk.id,
        name: pk.name,
        types: pk.types.map((e) => e.type.name),
        image: pk.sprites.other.home.front_default,
        hp: pk.stats[0].base_stat,
        attack: pk.stats[1].base_stat,
        defense: pk.stats[2].base_stat,
        speed: pk.stats[5].base_stat,
        height: pk.height,
        weight: pk.weight,
      };
    });

    // Espera a que todas las solicitudes de detalles de Pokémon se completen
    const getAllPokemon = await Promise.all(dataPokemon);
    return getAllPokemon;
  } catch (error) {
    throw new Error(error.message);
  }
};
     const getPokemonsDb = async () => {
    try {
      const allPokemonsDb = await Pokemons.findAll({
        // Busca en la tabla los modelos que necesitas, incluyendo los tipos
        include: {
          model: Types,
          attributes: ["name"], // Obtén solo el nombre del tipo
        },
      });
  
      // Verifica si allPokemonsDb contiene registros
      console.log("allPokemonsDb length:", allPokemonsDb.length);
  
      // Mapea los datos de la base de datos a un formato deseado
      const mapPokemons = allPokemonsDb.map((e) => {
        // Verifica si e.Types es una matriz válida antes de usar map
        const typesArray = e.Types ? e.Types.map((type) => type.name) : [];
  
        return {
          id: e.id,
          name: e.name,
          image: e.image,
          types: typesArray,
          hp: e.hp,
          attack: e.attack,
          defense: e.defense,
          speed: e.speed,
          height: e.height,
          weight: e.weight,
          createdInDb: e.createdInDb,
        };
      });
  
      return mapPokemons;
    } catch (error) {
      throw new Error(error.message);
    }
  };

// Función para obtener todos los Pokémon (desde API y base de datos)
const getAllPkController = async (name) => {
  const pokemonsDb = await getPokemonsDb();
  const pokemonsApi = await getPokemonsApi();
  
  // Combina los resultados de la API y la base de datos
  const allPokemon = pokemonsDb.concat(pokemonsApi);
  
  if (name) {
    // Filtra los Pokémon por nombre si se proporciona un nombre
    const pokemonName = allPokemon.filter(
      (e) => e.name.toLowerCase() === name.toLowerCase()
    );

    if (pokemonName.length > 0) {
      return pokemonName;
    } else {
      throw new Error (`No se encontró ningún Pokémon llamado ${name}` );
    }
  }

  return allPokemon;
};

module.exports = { getAllPkController };