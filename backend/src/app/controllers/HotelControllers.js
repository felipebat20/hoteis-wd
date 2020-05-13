import mongoose from 'mongoose';


import Hotel from '../models/Hotel';

class HotelController {
    async index(req, res) {
        const { page = 1 } = req.query;
        const hoteis = await Hotel.paginate({}, { page, limit: 10 });

        return res.json(hoteis);
    }

    async show(req, res) {
        const id = req.params.id;
        const hotel = await Hotel.findById(id);
        return res.json(hotel);
    }

    async store(req, res) {
        //Criar
        const hotelImage = req.file.path;
        const { name, street, number, neighborhood, cep, city, uf, qtdeAptos } = req.body;
        const hotel = await Hotel.create({ name, street, number, neighborhood, cep, city, uf, qtdeAptos, nomeImage: hotelImage });

        return res.json(hotel);
    }
    async update(req, res) {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(hotel);
    }
    async destroy(req, res) {
        const hotel = await Hotel.findByIdAndRemove(req.params.id);
        return res.send();
    }
}

export default new HotelController();