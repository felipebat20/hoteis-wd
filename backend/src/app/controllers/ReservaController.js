import mongoose from 'mongoose';

import Reserva from '../models/Reserva';
import User from '../models/User';
import Hotel from '../models/Hotel';
import * as yup from 'yup';

class ReservaController {
    async store(req, res) {

        const reservaSchema = yup.object().shape({
            qtdeHospedes: yup.number().required('Number is required'),
            dataInicial: yup.date().required('Start date is required'),
            dataFinal: yup.date().min(yup.ref('dataInicial'), 'End date should be later than start date').required('End date is required'),

        });

        if (!(await reservaSchema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }
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
        await reserva.populate('responsavel').populate('hotel').execPopulate();

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
        const options = {
            page: 1,
            limit: 10,
            populate: 'responsavel hotel'
        }
        const reserva = await Reserva.paginate({ responsavel: user_id }, options);
        return res.json(reserva);
    }

}

export default new ReservaController();