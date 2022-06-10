const {Router} = require('express');
const router = Router();
const {getInventario, setInventario, deleteInventario, updateInventario, getOneInventario} = require('./../controllers/InventarioController')


router.get("/inventario", getInventario);
router.post("/inventario", setInventario);
router.delete("/inventario", deleteInventario);
router.put("/inventario", updateInventario)
router.get("/inventario/:id", getOneInventario)

module.exports= router;