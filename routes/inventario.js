const {Router} = require('express');
const router = Router();
const {getInventario, setInventario} = require('./../controllers/InventarioController')

router.get("/inventario", getInventario);
router.post("/inventario", setInventario);
/*router.delete("/inventario", deleteInventario);
router.put("/inventario", updateInventario)*/

module.exports= router;