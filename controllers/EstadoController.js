const EstadoEquipo = require('./../models/EstadoEquipo');


const getEstadoEquipo = async(req, res) =>{

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







module.exports = {getEstadoEquipo, setEstadoEquipo};