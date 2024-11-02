// Importaciones
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configuraciones (CORS, BODY-PARSER, RUTAS, STATIC-FOLDER)

// * cors
app.use(cors());

// * body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// * static folder
app.use(express.static('uploads'));


// * Rutas


module.exports = app;