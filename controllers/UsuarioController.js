const Usuario = require('./../models/Usuario');


const getUsuarios = async(req, res) =>{

    const usuarios = await Usuario.find();
    console.log(usuarios)
    res.send(usuarios);
}



setUsuarios = async (req, res)=> {
    const {nombre, email, estado} = req.body;
    const usuario = new Usuario ({nombre, email, estado});
    await usuario.save();
    res.send("Usuario Creado")
};







module.exports = {getUsuarios, setUsuarios};