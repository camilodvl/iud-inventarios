const Marca = require('./../models/Marca');


getMarca = async(req, res) =>{

    const marcas = await Marca.find();
    res.send(marcas);
}



setMarca = async (req, res)=> {
    const {nombre, estado} = req.body;
    const marca = new Marca ({nombre, estado});
    try{
        await marca.save();
        res.send("Marca del equipo Creado")

    }catch (err){
        console.log(err)
    }

};

deleteMarca = async (req, res)=> {
    const {id} = req.body;
    await Marca.findByIdAndDelete(id);
    res.send(`Marca de equipo borrado`);

};

updateMarca = async (req, res)=>{
    const {id, nombre, estado} = req.body;
            await Marca.findByIdAndUpdate(id, {nombre, estado});
        res.send(`Marca de equipo Actualizado`);
}






module.exports = {getMarca, setMarca, deleteMarca, updateMarca};