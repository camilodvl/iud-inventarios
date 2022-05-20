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

deleteInventario = async (req, res)=> {
    const {id} = req.body;
    await Inventario.findByIdAndDelete(id);
    res.send(`El inventario ha sido eliminado :D`);
};

updateInventario = async (req, res)=>{
    const {id, serial, modelo, descripcion, foto, precio,
        fechaCompra, usuario, marca, tipoEquipo, estadoEquipo} = req.body;
        await Inventario.findByIdAndUpdate(id, {serial, modelo, descripcion, foto, precio,
            fechaCompra, usuario, marca, tipoEquipo, estadoEquipo})
        res.send(`Estado del inventario Actualizado`);
}







module.exports = {getInventario, setInventario, deleteInventario, updateInventario};