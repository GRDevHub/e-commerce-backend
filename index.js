// importar dependencias instaladas
const mongoose = require('mongoose');

// Obtener variables de entorno (esto obtiene del archivo .env pero con la dependencia dotenv)
require('dotenv').config();
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;

// Ver las variables de entorno
console.log(`${dbUser} \n${dbPass} \n${dbHost}`);

// Realizar la conexión
const connectDB = async () => {

    try {
        // conexión con la url del MongoDB
        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/`);

        // Mensaje de conexión exitosa
        console.log('La conexión a la base de datos ha sido satisfactoria');

    } catch (error) {
        console.log(`Error al conectar a la base de datos ${error.message}`)
    }
};

// llamar a la funcion de conexión
connectDB();