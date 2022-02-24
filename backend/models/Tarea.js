const mongoose = require('mongoose');

const TareaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    completada: {
        type: Boolean,
        default: false,
    },
    fecha: {
        type: Date,
        default: Date.now(),
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
    }
});

module.exports = mongoose.model('Tarea', TareaSchema);