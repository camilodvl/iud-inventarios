const {Router} = require('express');
const res = require('express/lib/response');
const router = Router();
const {getUsuarios, setUsuarios} = require('./../controllers/UsuarioController')

router.get("/usuarios", getUsuarios);
router.post("/usuarios", setUsuarios)

module.exports= router;