const express = require('express');
const router = express.Router();
const userController = require('./usuarioController');

router.post('/usuarios', userController.crearUsuario);
router.get('/usuarios', userController.obtenerUsuarios);
router.get('/usuarios/:id', userController.obternerUsuario);
router.put('/usuarios/:id', userController.actualizarUsuario);
router.delete('/usuarios/:id', userController.eliminarUsuario);

module.exports = router;