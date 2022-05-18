const {Router} = require('express');
const router = Router();
const {getEstadoEquipo, setEstadoEquipo} = require('./../controllers/EstadoController')

router.get("/estadoequipo", getEstadoEquipo);
router.post("/estadoequipo", setEstadoEquipo)

module.exports= router;