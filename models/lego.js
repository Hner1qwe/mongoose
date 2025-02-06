import { model, Schema } from "mongoose";

const legos = new Schema({
    nome: {
        type: String,
        required: true
    },
    pecas: {
        type: Number,
        required: true
    },
    preco: {
        type: Number,
        required: true
    }
})

const legosModel = model('Lego', legos)

export {legosModel}   