require("dotenv").config();
const express = require("express");
const bd = require("./database");
const usuariosRutas = require("./usuariosRutas");

const app = express();
app.use(express.json());

// Montar las rutas bajo el prefijo /api
app.use('/api', usuariosRutas);

// Conexión a MySQL

bd.sync()
    .then(() => console.log("Conexión a la base de datos establecida"))
    .catch((err) => console.error("Error al conectar a la base de datos:", err));

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});