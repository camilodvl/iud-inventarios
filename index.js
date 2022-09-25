const express = require('express');
const {getConnection} = require('./db/db-connection-mongo')
const EstadoEquipo = require ('./models/EstadoEquipo')
const Marca = require('./models/Marca');
const Inventario = require('./models/Inventario');
const TipoEquipo = require ('./models/TipoEquipo')
const Usuario = require ('./models/Usuario');
require('dotenv').config();
const cors = require('cors');

//Configuración del servidor
const app = express();
const port =3000;

//Middleware
app.use(express.json());
app.use(cors());

//Rutas
app.use(require('./routes/usuarios'));
app.use(require('./routes/estadoequipo'));
app.use(require('./routes/marca'));
app.use(require('./routes/tipoequipo'));
app.use(require('./routes/inventario'));

//Inicio de conexión y del servidor y puerto
getConnection();
app.listen(port, () => {
console.log(`Server on port ${port}`);

})