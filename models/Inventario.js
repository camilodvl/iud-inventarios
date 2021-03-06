const {Schema, model} = require('mongoose');

const InventarioSchema = Schema({
    serial:{
        type: String,
        required: true,
        unique: true,
    },
    modelo: {
        type:String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    foto: {
        type:String,
        required:true,
    },
    precio: {
        type:Number,
        required:true,
    },
    fechaCompra: {
        type:Date,
        required:true,
    },
    usuario: {
        type:Schema.Types.ObjectId,
        ref: 'Usuario',
        required:false,
    },
    marca: {
        type:Schema.Types.ObjectId,
        ref: 'Marca',
        required:true,
    },
    tipoEquipo: {
        type:Schema.Types.ObjectId,
        ref: 'TipoEquipo',
        required:true,
    },
    estadoEquipo: {
        type:Schema.Types.ObjectId,
        ref: 'EstadoEquipo',
        required:false,
    }




}, { timestamps: { createdAt: 'fechaCreacion', updatedAt: 'fechaActualizacion' } });

//creamos la coleción en mongodb a partir del Schema y lo exportamos

module.exports= model('Inventario', InventarioSchema);