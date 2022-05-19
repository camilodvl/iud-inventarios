const {Router} = require('express');
const router = Router();
const {getTipoEquipo, setTipoEquipo, deleteTipoEquipo, updateTipoEquipo} = require('../controllers/TipoEquipoController.js')

router.get("/tipoequipo", getTipoEquipo);
router.post("/tipoequipo", setTipoEquipo);
router.delete("/tipoequipo", deleteTipoEquipo);
router.put("/tipoequipo", updateTipoEquipo)

module.exports= router;