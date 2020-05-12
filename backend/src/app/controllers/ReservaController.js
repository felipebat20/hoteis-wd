import mongoose from 'mongoose';

import Reserva from '../models/Reserva';
import User from '../models/User';
import Hotel from '../models/Hotel';

class ReservaController {
    async store(req, res) {
        const { user_id } = req.headers;
        const { hotel_id } = req.params;
        const { dataInicial, dataFinal, qtdeHospedes } = req.body;

        const user = await User.findById(user_id).catch(err => {
            return res.status(401).json({ Erro: err });
        });

        if (!user)
            return res.status(401).json({ Erro: "User not Found" });

        const hotel = await Hotel.findOne({ _id: hotel_id }).catch(err => {
            return res.status(401).json({ ERRO: err });
        });

        if (!hotel)
            return res.status(401).json({ Error: "Hotel not found" });

        const reserva = await Reserva.create({ responsavel: user_id, hotel: hotel_id, dataInicial, dataFinal, qtdeHospedes });
        await reserva.populate('User').populate('hotel').execPopulate();
        return res.json(reserva);
    }
    async index(req, res) {
        const { user_id } = req.params;
        const user = await User.findOne({ _id: user_id }).catch(err => {
            return res.status(500).json({ Error: err });
        });
        if (!user)
            return res.status(401).json({ error: "User not found." });
        const { page = 1 } = req.query;
        const reserva = await Reserva.paginate({}, { page, limit: 10 });
        return res.json(reserva);
    }
}

export default new ReservaController();