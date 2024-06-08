const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8888;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES

//Conexión a la base de datos.
const connection = require('./db');

app.get('/cancion', async (req, res) => {
    const query = `
        SELECT *
        FROM canciones;
    `;
    try{
        [results] = await connection.query(query);
        res.json({ success: true, results });
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: error });
    }
});

app.get('/cancion/:ID', async (req, res) => {
    const cancionID = req.params.ID;
    const query = `
        SELECT *
        FROM canciones
        WHERE id_cancion = ?;
    `;
    try{
        [results] = await connection.query(query, [cancionID]);
        res.json({ success: true, results });
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: error });
    }
});


// Middleware para manejar el error 404
app.use((req, res, next) => {
    res.status(404);
    res.send(`
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <a href="/">Volver a la página de inicio</a>
    `);
});


//Iniciamos el servidor.
app.listen(port, () => {
    console.log('Servidor iniciado en: http://localhost:' + port);
});
