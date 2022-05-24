const Inventario = require("./../models/Inventario");

getInventario = async (req, res) => {
  try {
    const inventarios = await Inventario.find().populate([
      { path: "usuario", select: "nombre email" },
      { path: "marca", select: "nombre" },
      { path: "tipoEquipo", select:"nombre" },
      { path: "estadoEquipo",select:"nombre" },
    ]);
    res.send(inventarios);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

setInventario = async (req, res) => {
  const {
    serial,
    modelo,
    descripcion,
    foto,
    precio,
    fechaCompra,
    usuario,
    marca,
    tipoEquipo,
    estadoEquipo,
  } = req.body;
  const inventario = new Inventario({
    serial,
    modelo,
    descripcion,
    foto,
    precio,
    fechaCompra,
    usuario,
    marca,
    tipoEquipo,
    estadoEquipo,
  });
  try {
    await inventario.save();
    res.send("Inventario Creado");
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

deleteInventario = async (req, res) => {
  const { id } = req.body;
  try {
    await Inventario.findByIdAndDelete(id);
    res.send(`El inventario ha sido eliminado`);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

updateInventario = async (req, res) => {
  const {
    id,
    serial,
    modelo,
    descripcion,
    foto,
    precio,
    fechaCompra,
    usuario,
    marca,
    tipoEquipo,
    estadoEquipo,
  } = req.body;
  try {
    await Inventario.findByIdAndUpdate(id, {
      serial,
      modelo,
      descripcion,
      foto,
      precio,
      fechaCompra,
      usuario,
      marca,
      tipoEquipo,
      estadoEquipo,
    });
    res.send(`Estado del inventario Actualizado`);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Error del servidor, consulte los logs`);
  }
};

module.exports = {
  getInventario,
  setInventario,
  deleteInventario,
  updateInventario,
};
