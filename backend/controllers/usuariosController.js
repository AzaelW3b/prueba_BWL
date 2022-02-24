const Usuarios = require('../models/Usuarios.js');

const jwt = require('jsonwebtoken');

exports.crearUsuarios = async (req, res) => {

    const { email } = req.body;
    try {
        const existeUsuario = await Usuarios.findOne({ email });
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
