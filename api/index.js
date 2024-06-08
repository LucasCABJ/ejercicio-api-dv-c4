const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8888;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


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

// Existe, no se consume desde la aplicación de REACT
app.post('/cancion', async (req, res) => {
    const { nombre, letra } = req.body;
    const query = `
        INSERT INTO canciones (nombre, letra)
        VALUES (?, ?);
    `;
    try{
        [results] = await connection.query(query, [nombre, letra]);
        res.status(201).json({ success: true, message: "Canción creada exitosamente"});
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
