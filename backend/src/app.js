import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
const cors = require('cors');

class App {
    constructor() {
        this.app = express();
        mongoose.connect('mongodb+srv://febat:febat@cluster0-6cryp.mongodb.net/hoteis?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use('/api', routes);
    }

}

export default new App().app;