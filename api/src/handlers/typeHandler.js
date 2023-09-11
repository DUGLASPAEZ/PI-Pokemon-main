const {getTypesPkController } = require ('../controllers/getTypesPkController')

const getAllTypeHandler= async (req, res)=>{
try {
    const types= await getTypesPkController()
    res.status(200).send(types)
} catch (error) {
    res.status(400).send({error: error.message})
}
}
module.exports={getAllTypeHandler}
 