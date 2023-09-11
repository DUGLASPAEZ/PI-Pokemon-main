const { Types } = require("../db");
const axios = require("axios");

// Función para obtener tipos de Pokémon desde la API y guardarlos en la base de datos
const getTypesPkController = async () => {
  let allTypes = []; // Un arreglo para almacenar los nombres de los tipos

  // Realiza una solicitud GET a la API de Pokémon para obtener información sobre los tipos
  const infoApi = await axios.get("https://pokeapi.co/api/v2/type");
  const resultApi = await infoApi.data.results;

  // Mapea los resultados de la API para extraer los nombres de los tipos
  resultApi.map((e) => allTypes.push(e
    .name));
  
  // Utiliza Promise.all para ejecutar múltiples operaciones asincrónicas en paralelo
  await Promise.all(
    allTypes.map((type) => Types.findOrCreate({ where: { name: type } }))
  );
  
  // Después de crear o buscar tipos en la base de datos, busca y devuelve todos los tipos
  const typesDb = await Types.findAll();
  return typesDb;
};

// Exporta la función para su uso en otros módulos
module.exports = {
  getTypesPkController
};