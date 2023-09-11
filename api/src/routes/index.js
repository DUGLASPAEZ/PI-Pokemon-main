const { Router } = require('express');
const pokemonsRouter = require("./pokemonsRouter.js")
const  typeRouter = require("./typeRouter.js")

const router = Router();
router.use("/pokemons", pokemonsRouter);
router.use("/types", typeRouter);  

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
