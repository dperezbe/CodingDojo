const express = require('express');
const conectarDB = require('./config/db');

const port = 8000;

// crear el servicor express
const app = express();

// conectar a la base de datos
conectarDB();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//app.use('/api/jokes',require('./routes/jokes'));
const JokeRoutes = require("./routes/jokes");
JokeRoutes(app);


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))