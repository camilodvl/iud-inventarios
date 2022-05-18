const {Router} = require('express');
const router = Router();
const {getMarca, setMarca} = require('./../controllers/MarcaController')

router.get("/marca", getMarca);
router.post("/marca", setMarca)

module.exports= router;