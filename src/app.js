const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const routes = require('./routes');
const models = requireDir('./models/');

class App {
    constructor() {
        this.app = express();
        mongoose.connect('mongodb+srv://febat:febat@cluster0-6cryp.mongodb.net/hoteis?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
        this.middlewares();
        this.models;
        this.routes();
    }
    middlewares() {
        this.app.use(express.json());
    }
    routes() {
        this.app.use('/api', require('./routes'));
    }

}

module.exports = new App().app;