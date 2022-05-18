const {Router} = require('express');
const router = Router();
const {getTipoEquipo, setTipoEquipo} = require('../controllers/TipoEquipoController.js')

router.get("/tipoequipo", getTipoEquipo);
router.post("/tipoequipo", setTipoEquipo)

module.exports= router;