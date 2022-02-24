const Usuarios = require('../models/Usuarios.js');
const jwt = require('jsonwebtoken');

exports.crearUsuarios = async (req, res) => {

    const { correo } = req.body;
    try {
        const existeUsuario = await Usuarios.findOne({ correo });
        if (existeUsuario) {
            return res.status(400).json({ msg: 'Este usuario ya se encuentra registrado' });
        }
        const usuario = new Usuarios(req.body);
        await usuario.save();
        const payload = {
            usuario: {
                id: usuario.id,
            }
        }
        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "30d",
        }, (error, token) => {
            if (error) throw error;
            res.json({ token });
        });
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}

exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuarios.find({ req }).sort({ nombre: 1 });
        res.json({ usuarios });
    } catch (error) {
        console.log(error);
    }
}

exports.editarUsuario = async (req, res) => {
    const { nombre, correo } = req.body;
    const usuarioActualizado = {};

    if (nombre) usuarioActualizado.nombre = nombre;
    if (correo) usuarioActualizado.correo = correo;

    try {
        let usuario = await Usuarios.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        }
        usuario = await Usuarios.findByIdAndUpdate({ _id: req.params.id },
            { $set: usuarioActualizado }, { new: true });
        res.json({ usuario });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarUsuario = async (req, res) => {
    try {
        let usuario = await Usuarios.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        }
        await Usuarios.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Usuario eliminado' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}