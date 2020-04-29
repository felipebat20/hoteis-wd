import { Router } from 'express';

const routes = new Router();

import HotelController from './controllers/HotelControllers';


routes.get('/hoteis', HotelController.index);
routes.post('/hoteis', HotelController.store);
routes.get('/hoteis/:id', HotelController.show);
routes.put('/hoteis/:id', HotelController.update);
routes.delete('/hoteis/:id', HotelController.destroy);

export default routes;