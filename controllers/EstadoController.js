const EstadoEquipo = require('./../models/EstadoEquipo');


getEstadoEquipo = async(req, res) =>{

    const estados = await EstadoEquipo.find();
    res.send(estados);
}

setEstadoEquipo = async (req, res)=> {
    const {nombre, estado} = req.body;
    const estadoEquipo = new EstadoEquipo ({nombre, estado});
    try{
        await estadoEquipo.save();
        res.send("Estado del equipo Creado")

    }catch (err){
        console.log(err)
    }

};


deleteEstadoEquipo = async (req, res)=> {
    const {id} = req.body;
    await EstadoEquipo.findByIdAndDelete(id);
    res.send(`Estado de equipo borrado`);

};

updateEstadoEquipo = async (req, res)=>{
    const {id, nombre, estado} = req.body;
            await EstadoEquipo.findByIdAndUpdate(id, {nombre, estado});
        res.send(`Estado de equipo Actualizado`);
}








module.exports = {getEstadoEquipo, setEstadoEquipo, deleteEstadoEquipo, updateEstadoEquipo};