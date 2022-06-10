const Marca = require("./../models/Marca");

getMarca = async (req, res) => {
  try {
    const marcas = await Marca.find();
    res.send(marcas);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

getOneMarca = async (req, res) => {
  const { id } = req.params;
  try {
    const marca = await Marca.findById(id);
    res.send(marca);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

setMarca = async (req, res) => {
  const { nombre, estado } = req.body;
  const marca = new Marca({ nombre, estado });
  try {
    await marca.save();
    res.send("Marca del equipo Creado");
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

deleteMarca = async (req, res) => {
  const { id } = req.body;
  try {
    await Marca.findByIdAndDelete(id);
    res.send(`Marca de equipo borrado`);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

updateMarca = async (req, res) => {
  const { id, nombre, estado } = req.body;
  try {
    await Marca.findByIdAndUpdate(id, { nombre, estado });
    res.send(`Marca de equipo Actualizado`);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

module.exports = { getMarca, setMarca, deleteMarca, updateMarca, getOneMarca };
