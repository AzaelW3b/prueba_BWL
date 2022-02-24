const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const usuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    correo: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    registro: {
        type: Date,
        default: Date.now()
    }

});
usuariosSchema.pre('save', async function (next) {
    //si el password ya se hasheo
    if (!this.isModified('password')) {
        next();
    }
    //hasheando el password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
usuariosSchema.methods.compararPassword = async function (req, res) {

}
module.exports = mongoose.model('Usuarios', usuariosSchema);
