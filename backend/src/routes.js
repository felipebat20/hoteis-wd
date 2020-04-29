import { Router } from 'express';

const routes = new Router();

import HotelController from './app/controllers/HotelControllers';
import SessionController from './app/controllers/SessionController';
import ReservaController from './app/controllers/ReservaController';

routes.post('/sessions', SessionController.store);

routes.get('/reservas', ReservaController.index);
routes.post('/reservas/:user_id/:hotel_id', ReservaController.store);

routes.get('/hoteis', HotelController.index);
routes.post('/hoteis', HotelController.store);
routes.get('/hoteis/:id', HotelController.show);
routes.put('/hoteis/:id', HotelController.update);
routes.delete('/hoteis/:id', HotelController.destroy);

export default routes;