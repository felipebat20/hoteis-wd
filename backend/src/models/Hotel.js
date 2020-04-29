import mongoose from 'mongoose';
const mongoosePaginate = require('mongoose-paginate-v2');

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    neighborhood: {
        type: String,
        required: true,
    },
    cep: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    uf: {
        type: String,
        required: true,
    },
    qtdeAptos: {
        type: Number,
        required: false,
    },
    valorDiaria: {
        type: Number,
        required: false,
    },
    create_at: {
        type: Date,
        default: Date.now,
    },
});

HotelSchema.plugin(mongoosePaginate);

export default mongoose.model('Hotel', HotelSchema);