 const  { getAllPkController } = require ("../controllers/getAllPkController.js")

const getPkByIdController = async (id) => {
    const all = await getAllPkController();
    
    // Filtra los Pokémon por ID
    const byId = await all.filter((e) => String(e.id) === id);
    
    if (byId.length) {
      return byId;
    } else {
      throw new Error(`Pokemon no encontrado, id: ${id} incorrecto`);
    }
  };
  
  // Exporta las funciones para usarlas en otros módulos
  module.exports = { getPkByIdController };