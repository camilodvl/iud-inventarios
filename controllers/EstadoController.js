const EstadoEquipo = require("./../models/EstadoEquipo");

getEstadoEquipo = async (req, res) => {
  try {
    const estados = await EstadoEquipo.find();
    res.send(estados);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

setEstadoEquipo = async (req, res) => {
  const { nombre, estado } = req.body;
  const estadoEquipo = new EstadoEquipo({ nombre, estado });
  try {
    await estadoEquipo.save();
    res.send("Estado del equipo Creado");
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

deleteEstadoEquipo = async (req, res) => {
  const { id } = req.body;
  try {
    await EstadoEquipo.findByIdAndDelete(id);
    res.send(`Estado de equipo borrado`);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

updateEstadoEquipo = async (req, res) => {
  const { id, nombre, estado } = req.body;

  try {
    await EstadoEquipo.findByIdAndUpdate(id, { nombre, estado });
    res.send(`Estado de equipo Actualizado`);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

module.exports = {
  getEstadoEquipo,
  setEstadoEquipo,
  deleteEstadoEquipo,
  updateEstadoEquipo,
};
