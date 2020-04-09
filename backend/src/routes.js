const { Router } = require('express');

const routes = Router();

const HotelController = require('./controllers/HotelControllers');


routes.get('/hoteis', HotelController.index);
routes.post('/hoteis', HotelController.store);
routes.get('/hoteis/:id', HotelController.show);
routes.put('/hoteis/:id', HotelController.update);
routes.delete('/hoteis/:id', HotelController.destroy);
module.exports = routes;