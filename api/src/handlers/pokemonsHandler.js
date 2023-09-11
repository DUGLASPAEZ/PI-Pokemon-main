const {getAllPkController} = require ("../controllers/getAllPkController")
const { getPkByIdController} = require ('../controllers/getPkByIdController')
const { postPkController } = require('../controllers/postPkController')


const getAllPokemonsHandler = async(req, res) =>{
    const {name} = req.query
    console.log("rura", name)
   try {
    const Pokemons = await getAllPkController(name)
    res.status(200).send(Pokemons);
   } catch (error) {
    res.status(400).send({error: error.message})
   }
}

const getPkByIdHandler = async (req, res) =>{
    const {id}=req.params
    try {
        const PokemonsId= await getPkByIdController(id)
        res.status(200).send(PokemonsId);
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
const postCreatPkHandler = async (req, res) => {
    const {
      name,
      image,
      hp,
      attack,
      defense,
      speed = null,
      height = null,
      weight = null,
      createdInDb = true, 
      types,
    } = req.body;
    try {
      const pokemon = await postPkController(
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        createdInDb,
        types
      );
      res.status(200).json( pokemon );
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


module.exports={getAllPokemonsHandler, getPkByIdHandler, postCreatPkHandler}