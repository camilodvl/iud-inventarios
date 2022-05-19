const {Schema, model} = require('mongoose');

const EstadoEquiposSchema = Schema({
    nombre:{
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
        enum:['Activo', 'Inactivo'],
    }
}, { timestamps: { createdAt: 'fechaCreacion', updatedAt: 'fechaActualizacion' } });

//creamos la coleción en mongodb a partir del Schema y lo exportamos

module.exports= model('EstadoEquipo', EstadoEquiposSchema);