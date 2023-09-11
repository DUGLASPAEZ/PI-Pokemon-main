const { Router } = require ("express");
const {getAllPokemonsHandler, getPkByIdHandler, postCreatPkHandler} = require ("../handlers/pokemonsHandler")

const pokemonsRouter = Router();

pokemonsRouter.get ("/", getAllPokemonsHandler);

pokemonsRouter.get("/poke/:id", getPkByIdHandler);


pokemonsRouter.post("/creatpk", postCreatPkHandler);



module.exports = pokemonsRouter;