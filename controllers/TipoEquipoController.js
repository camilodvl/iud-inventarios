const TipoEquipo = require('./../models/TipoEquipo');


getTipoEquipo = async(req, res) =>{
    try{
        const tipos = await TipoEquipo.find();
        res.send(tipos);
    }catch(err){
        console.log(err);
        res.status(500).send(`Error del servidor, consulte los logs`);
    }

}



setTipoEquipo = async (req, res)=> {
    const {nombre, estado} = req.body;
    const tipo = new TipoEquipo ({nombre, estado});
    try{
        await tipo.save();
        res.send("Tipo del equipo Creado")

    }catch (err){
        console.log(err);
        res.status(500).send(`Error del servidor, consulte los logs`);
    }

};


deleteTipoEquipo = async (req, res)=> {
    const {id} = req.body;
    try{
        await TipoEquipo.findByIdAndDelete(id);
        res.send(`Tipo de equipo borrado`);
    }catch(err){
        console.log(err);
        res.status(500).send(`Error del servidor, consulte los logs`);
    }


};

updateTipoEquipo = async (req, res)=>{
    const {id, nombre, estado} = req.body;
    try{
        await TipoEquipo.findByIdAndUpdate(id, {nombre, estado});
        res.send(`Tipo de equipo Actualizado`);
    }catch(err){
        console.log(err);
        res.status(500).send(`Error del servidor, consulte los logs`);
    }

}







module.exports = {getTipoEquipo, setTipoEquipo, deleteTipoEquipo, updateTipoEquipo};