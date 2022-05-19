const {Schema, model} = require('mongoose');

const MarcaSchema = Schema({
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

module.exports= model('Marca', MarcaSchema);