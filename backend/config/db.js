const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});

const conectarDb = async () =>{
    try {
        const db = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        const url =`${db.connection.host}:${db.connection.port}`;
        console.log(`MongoDB conectado ${url}`);
    } catch (error) {
        console.log(`Error:${error.message}`);
        process.exit(1);
    }
}
module.exports = conectarDb;