import mongoose from 'mongoose';

import Reserva from '../models/Reserva';

class ReservaController {
    async store(req, res) {
        const { user_id, hotel_id } = req.params;
        const { dataInicial, dataFinal, qtdeHospedes } = req.body;

        const reserva = await Reserva.create({ responsavel: user_id, hotel: hotel_id, dataInicial, dataFinal, qtdeHospedes });
        return res.json(reserva);
    }
}

export default new ReservaController();