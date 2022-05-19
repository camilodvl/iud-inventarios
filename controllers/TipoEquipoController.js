const TipoEquipo = require('./../models/TipoEquipo');


getTipoEquipo = async(req, res) =>{

    const tipos = await TipoEquipo.find();
    res.send(tipos);
}



setTipoEquipo = async (req, res)=> {
    const {nombre, estado} = req.body;
    const tipo = new TipoEquipo ({nombre, estado});
    try{
        await tipo.save();
        res.send("Tipo del equipo Creado")

    }catch (err){
        console.log(err)
    }

};


deleteTipoEquipo = async (req, res)=> {
    const {id} = req.body;
    await TipoEquipo.findByIdAndDelete(id);
    res.send(`Tipo de equipo borrado`);

};

updateTipoEquipo = async (req, res)=>{
    const {id, nombre, estado} = req.body;
            await TipoEquipo.findByIdAndUpdate(id, {nombre, estado});
        res.send(`Tipo de equipo Actualizado`);
}







module.exports = {getTipoEquipo, setTipoEquipo, deleteTipoEquipo, updateTipoEquipo};