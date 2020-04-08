const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

class App {
    constructor() {
        this.app = express();
        mongoose.connect('mongodb+srv://febat:febat@cluster0-6cryp.mongodb.net/hoteis?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express.json());
    }
    routes() {
        this.app.use(routes);
    }

}

module.exports = new App().app;