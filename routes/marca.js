const {Router} = require('express');
const router = Router();
const {getMarca, setMarca, deleteMarca, updateMarca} = require('./../controllers/MarcaController')

router.get("/marca", getMarca);
router.post("/marca", setMarca);
router.delete("/marca", deleteMarca);
router.put("/marca", updateMarca)

module.exports= router;