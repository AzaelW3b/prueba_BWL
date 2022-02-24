const express = require ('express');
const usuariosController = require('../controllers/usuariosController');
const router = express.Router();

// router.post('/',
//     crearUsuarios
// );
router.post('/',
    usuariosController.crearUsuarios
);

module.exports = router;