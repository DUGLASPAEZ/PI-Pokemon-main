const { Pokemons, Types } = require('../db');

// Función para crear un nuevo Pokémon en la base de datos
const postPkController = async (
  name,
  image,
  hp,
  attack,
  defense,
  speed = null,
  height = null,
  weight = null,
  createdInDb,
  types
) => {
  // Intenta encontrar un Pokémon con el mismo nombre en la base de datos
  const [pokemon, created] = await Pokemons.findOrCreate({
    where: { name }, // Busca un Pokémon con el mismo nombre
    defaults: {
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      createdInDb,
    }, // Si no se encuentra, crea uno nuevo con los datos proporcionados
  });

  // Si no se creó un nuevo Pokémon, lanza un error
  if (!created) throw new Error("Este pokemon ya existe en la DB");

  // Busca los tipos en la base de datos que corresponden a los tipos proporcionados
  const typesDb = await Types.findAll({ where: { name: types } });

  // Asocia los tipos encontrados al Pokémon recién creado
  pokemon.addTypes(typesDb);

  // Devuelve el Pokémon creado con sus datos y tipos asociados
  return pokemon;
};

// Exporta la función para su uso en otros módulos
module.exports = { postPkController };