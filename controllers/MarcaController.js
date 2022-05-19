const Marca = require('./../models/Marca');


const getMarca = async(req, res) =>{

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







module.exports = {getMarca, setMarca};