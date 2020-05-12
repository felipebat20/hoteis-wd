import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multerConfig';

const routes = new Router();

import HotelController from './app/controllers/HotelControllers';
import SessionController from './app/controllers/SessionController';
import ReservaController from './app/controllers/ReservaController';

routes.post('/sessions', SessionController.store);
routes.get('/sessions', SessionController.index);

routes.get('/sessions/:user_id/reservas', ReservaController.index);
routes.post('/reservas/:user_id/:hotel_id', ReservaController.store);

routes.get('/hoteis', HotelController.index);
routes.post('/hoteis', multer(multerConfig).single('file'), HotelController.store);
routes.get('/hoteis/:id', HotelController.show);
routes.put('/hoteis/:id', multer(multerConfig).single('file'), HotelController.update);
routes.delete('/hoteis/:id', HotelController.destroy);

export default routes;