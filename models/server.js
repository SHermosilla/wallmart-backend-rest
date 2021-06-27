const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.productsPath = '/api/products'
        this.discountsPath = '/api/discounts'
        //Conexion a BD
        this.conectarDB();
        //middewares
        this.middleawares();

        //rutas de la apliación
        this.routes();
    }
    async conectarDB() {
        //DB Prod
        await dbConection();
    }
    middleawares() {
        this.app.use(cors());
        this.app.use(express.static('public'));
        //parseo del body
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.productsPath, require('../routes/products.route'));
        this.app.use(this.discountsPath, require('../routes/discounts.route'));
    } 

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor Corriendo en puerto", this.port);
        });
    }
}

module.exports = Server;
