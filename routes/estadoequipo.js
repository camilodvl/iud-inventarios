const {Router} = require('express');
const router = Router();
const {getEstadoEquipo, setEstadoEquipo, deleteEstadoEquipo, updateEstadoEquipo} = require('./../controllers/EstadoController')

router.get("/estadoequipo", getEstadoEquipo);
router.post("/estadoequipo", setEstadoEquipo);
router.delete("/estadoequipo", deleteEstadoEquipo);
router.put("/estadoequipo", updateEstadoEquipo);

module.exports= router;