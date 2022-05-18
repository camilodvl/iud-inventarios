const express = require('express');
const {getConnection} = require('./db/db-connection-mongo')
const Marca = require('./models/Marca');
const Inventario = require('./models/Inventario');

const app = express();
const port =3000;
app.use(express.json());
app.use(require('./routes/usuarios'));


getConnection();
app.listen(port, () => {
console.log(`Server on port ${port}`);

})