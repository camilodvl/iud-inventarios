const {Router} = require('express');
const router = Router();
const {getUsuarios, setUsuarios, deleteUsuario, updateUsuario} = require('./../controllers/UsuarioController')

router.get("/usuarios", getUsuarios);
router.post("/usuarios", setUsuarios);
router.delete("/usuarios", deleteUsuario);
router.put("/usuarios", updateUsuario)

module.exports= router;