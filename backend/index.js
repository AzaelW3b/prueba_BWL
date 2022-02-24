const express = require('express');
const conectarDb = require('./config/db');
const cors = require('cors');
const app = express();
conectarDb();
app.use(cors());
app.use(express.json({extend:true}));
const PORT = process.env.PORT || 4000;

app.use('/api/usuarios', require('./routes/usuarios'));

app.listen(PORT, () => console.log(`Servidor funcionando en el puerto ${PORT}`));
