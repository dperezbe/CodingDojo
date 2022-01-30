const express = require('express');
const conectarDB = require('./servidor/config/db');
const cors = require('cors');
const port = 8000;

// crear el servicor express
const app = express();
app.use(cors());
// conectar a la base de datos
conectarDB();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const Product = require("./servidor/routers/Producto.create")
Product(app);


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))