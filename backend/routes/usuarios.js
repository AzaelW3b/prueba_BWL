const express = require ('express');
const usuariosController = require('../controllers/usuariosController');
const router = express.Router();

router.post('/',usuariosController.crearUsuarios);
router.get('/',usuariosController.obtenerUsuarios);
router.put('/:id',usuariosController.editarUsuario);
router.delete('/:id',usuariosController.eliminarUsuario);
module.exports = router;