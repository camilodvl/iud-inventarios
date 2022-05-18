const {Router} = require('express');
const router = Router();
const {getInventario, setInventario} = require('./../controllers/InventarioController')

router.get("/inventario", getInventario);
router.post("/inventario", setInventario)

module.exports= router;