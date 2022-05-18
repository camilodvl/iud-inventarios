const TipoEquipo = require('./../models/TipoEquipo');


const getTipoEquipo = async(req, res) =>{

    const tipos = await TipoEquipo.find();
    res.send(tipos);
}



setTipoEquipo = async (req, res)=> {
    const {nombre, estado, fechaCreacion, fechaActualizacion} = req.body;
    const tipo = new TipoEquipo ({nombre, estado, fechaCreacion, fechaActualizacion});
    try{
        await tipo.save();
        res.send("Tipo del equipo Creado")

    }catch (err){
        console.log(err)
    }

};







module.exports = {getTipoEquipo, setTipoEquipo};