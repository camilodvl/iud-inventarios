const Usuario = require('./../models/Usuario');


getUsuarios = async(req, res) =>{

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

deleteUsuario = async (req, res)=> {
    const {id} = req.body;
    await Usuario.findByIdAndDelete(id);
    res.send(`Usuario borrado`);

};

updateUsuario = async (req, res)=>{
    const {id, nombre, email, estado} = req.body;
            await Usuario.findByIdAndUpdate(id, {nombre, email, estado});
        res.send(`Usuario Actualizado`);
}





module.exports = {getUsuarios, setUsuarios, deleteUsuario, updateUsuario};