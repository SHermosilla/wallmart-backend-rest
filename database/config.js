const mongoose = require('mongoose');

const dbConection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('BD Online');
    } catch (error) {
        console.log(error);
        throw new Error("Error en la conexión a la base de datos");
    }
}

module.exports = {
    dbConection
}