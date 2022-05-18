const {Router} = require('express');
const router = Router();
const {getUsuarios, setUsuarios} = require('./../controllers/UsuarioController')

router.get("/usuarios", getUsuarios);
router.post("/usuarios", setUsuarios)

module.exports= router;