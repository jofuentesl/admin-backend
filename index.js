require('dotenv').config();

const express = require('express');

const cors = require('cors');

const { dbconnection } = require('./database/config');

//Crear servidor express
const app = express();

//Configurar Cors
app.use(cors());

//Base de datos
dbconnection();


//Rutas 
app.get( '/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola mundo'
    });

});

app.listen( process.env.PORT, ()=> {
    console.log('Servidor levantado ' + 3000);
});