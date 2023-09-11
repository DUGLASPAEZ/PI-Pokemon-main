const { Router } = require ("express");
const  {getAllTypeHandler} = require ("../handlers/typeHandler")
typeRouter = Router();

typeRouter.get("/type", getAllTypeHandler);

  module.exports = typeRouter;