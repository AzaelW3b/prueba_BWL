const Tarea = require('../models/Tarea');

exports.crearTarea = async (req, res) => {
    try {
        const tarea = new Tarea(req.body);
        tarea.usuario = req.usuario.id;
        await tarea.save();
        res.json({ tarea });
    } catch (error) {
        console.log(error);
    }
}

exports.obtenerTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find({ usuario: req.usuario.id });
        res.json({ tareas });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.editarTareas = async (req, res) => {
    const { nombre, completada } = req.body;
    const tareaActualizada = {};

    if (nombre) tareaActualizada.nombre = nombre;
    if (completada) tareaActualizada.completada = completada;
    try {
        let tarea = await Tarea.findById(req.params.id);
        if (!tarea) {
            return res.status(404).json({ msg: 'Tarea no encontrada' });
        }

        if (tarea.usuario.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No autorizado' });
        }
        //actualizamos la tarea
        tarea = await Tarea.findByIdAndUpdate({ _id: req.params.id },
            { $set: tareaActualizada }, { new: true });
        res.json({ tarea });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}

exports.eliminarTarea = async (req, res) => {
    try {
        let tarea = await Tarea.findById(req.params.id);

        if (!tarea) {
            return res.status(404).json({ msg: 'Tarea no encontrada' });
        }
        if (tarea.usuario.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No autorizado' });
        }
        //eliminamos la tarea
        await Tarea.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Tarea eliminada' });
    } catch (error) {
        console.log(error);

    }
}