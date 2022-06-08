const Usuario = require("./../models/Usuario");

getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.send(usuarios);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

getOneUsuario = async (req, res) => {
  const {id} = req.params;
  try {
    const usuario = await Usuario.findById(id);
    res.send(usuario);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

setUsuarios = async (req, res) => {
  const { nombre, email, estado } = req.body;
  const usuario = new Usuario({ nombre, email, estado });
  try {
    await usuario.save();
    res.send("Usuario Creado");
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

deleteUsuario = async (req, res) => {
  const { id } = req.body;
  try {
    await Usuario.findByIdAndDelete(id);
    res.send(`Usuario borrado`);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

updateUsuario = async (req, res) => {
  const { id, nombre, email, estado } = req.body;
  try {
    await Usuario.findByIdAndUpdate(id, { nombre, email, estado });
    res.send(`Usuario Actualizado`);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

module.exports = { getUsuarios, setUsuarios, deleteUsuario, updateUsuario, getOneUsuario };
