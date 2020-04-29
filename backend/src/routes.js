import { Router } from 'express';

const routes = new Router();

import HotelController from './controllers/HotelControllers';
import SessionController from './controllers/SessionController';
import ReservaController from './controllers/ReservaController';

routes.post('/sessions', SessionController.store);

routes.post('/:user_id/:hotel_id/reservas', ReservaController.store);

routes.get('/hoteis', HotelController.index);
routes.post('/hoteis', HotelController.store);
routes.get('/hoteis/:id', HotelController.show);
routes.put('/hoteis/:id', HotelController.update);
routes.delete('/hoteis/:id', HotelController.destroy);

export default routes;