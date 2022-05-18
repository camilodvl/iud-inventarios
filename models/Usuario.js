const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    estado: {
        type: String,
        required: true,
        enum:['Activo', 'Inactivo'],
    },
    fechaCreacion: {
        type:Date,
        required:true,
    },
    fechaActualizacion: {
        type:Date,
        required:true,
    }

});

//creamos la coleción en mongodb a partir del Schema y lo exportamos

module.exports= model('Usuario', UsuarioSchema);