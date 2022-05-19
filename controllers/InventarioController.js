const Inventario = require('./../models/Inventario');


getInventario = async(req, res) =>{

    const inventarios = await Inventario.find();
    res.send(inventarios);
}



setInventario = async (req, res)=> {
    const {serial, modelo, descripcion, foto, precio,
    fechaCompra, usuario, marca, tipoEquipo, estadoEquipo} = req.body;
    const inventario = new Inventario ({serial, modelo, descripcion, foto, precio,
        fechaCompra, usuario, marca, tipoEquipo, estadoEquipo});
    try{
        await inventario.save();
        res.send("Inventario Creado")

    }catch (err){
        console.log(err)
    }

};







module.exports = {getInventario, setInventario};