// Controlador de funcuiones del modelo Usuario
const Usuario = require("./usuario");

exports.crearUsuario = async (req, res) => {
    const nuevoUsuario = await Usuario.create(req.body);
    if (nuevoUsuario) {
        res.status(201).json(nuevoUsuario);
    } else {
        res.status(500).json({ error: "Error al crear usuario" });
    }
}

exports.obtenerUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll();
    if( usuarios) {
        res.status(200).json(usuarios);
    } else {
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
}

exports.obternerUsuario = async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
        res.status(200).json(usuario);
    } else {
        res.status(404).json({ error: "Usuario no encontrado" });
    }
}

exports.actualizarUsuario = async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
        await usuario.update(req.body);
        res.status(200).json(usuario);
    } else {
        res.status(404).json({ error: "Usuario no encontrado" });
    }
}

exports.eliminarUsuario = async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
        await usuario.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ error: "Usuario no encontrado" });
    }
}