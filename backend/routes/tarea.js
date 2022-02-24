const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const tareaController = require('../controllers/tareaController');


router.post('/', auth, tareaController.crearTarea);
router.get('/', auth, tareaController.obtenerTareas);
router.put('/:id', auth, tareaController.editarTareas);
router.delete('/:id', auth, tareaController.eliminarTarea);

module.exports = router;