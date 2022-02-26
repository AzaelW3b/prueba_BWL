const Usuarios = require('../models/Usuarios');
const bcryptjs = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {
    const { correo, password } = req.body;

    try {
        let usuario = await Usuarios.findOne({ correo });

        if (!usuario) {
            return res.status(400).json({ msg: 'El usuario no existe' });
        }
        const passCorrecto = await bcryptjs.compare(password, usuario.password);
        if (!passCorrecto) {
            return res.status(400).json({ msg: 'Password incorrecto' });
        }
        //si todo es correcto
        await Usuarios.findOneAndUpdate({ ultimoLogin: Date.now()});
        console.log(Usuarios);
        const payload = {
            usuario: {
                id: usuario.id,
            }
        }
        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "30d"
        }, (error, token) => {
            if (error) throw error;
            res.json({ token });
        });
    } catch (error) {
        console.log(error);
    }
}

exports.usuarioAutenticado = async (req, res) => {
    try {
        const usuario = await Usuarios.findById(req.usuario.id).select('-password');
        res.json({ usuario });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo error' });
    }
}
