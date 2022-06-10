const {Router} = require('express');
const router = Router();
const {getEstadoEquipo, setEstadoEquipo, deleteEstadoEquipo, updateEstadoEquipo, getOneEstadoEquipo} = require('./../controllers/EstadoController')

router.get("/estadoequipo", getEstadoEquipo);
router.post("/estadoequipo", setEstadoEquipo);
router.delete("/estadoequipo", deleteEstadoEquipo);
router.put("/estadoequipo", updateEstadoEquipo);
router.get("/estadoequipo/:id", getOneEstadoEquipo)

module.exports= router;