import { Schema, model } from 'mongoose';
import User from './User';
import Hotel from './Hotel';

const ReservaSchema = new Schema({
    responsavel: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
    hotel: {
        type: Schema.Types.ObjectId,
        ref: Hotel,
        required: true,
    },
    dataInicial: {
        type: String,
        required: true
    },
    dataFinal: {
        type: String,
        required: true,
    },
    qtdeHospedes: {
        type: Number,
        required: true,
    }

});

export default model('Reserva', ReservaSchema);