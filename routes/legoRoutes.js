import express from 'express'

const Legorouter = express.Router();
import {addLego, atualizarLegos, buscarlegos, deletar} from '../controller/legoController.js'


Legorouter.post('/', addLego)
Legorouter.get('/', buscarlegos)
Legorouter.put('/id:', atualizarLegos)
Legorouter.delete('/id:', deletar)

export{Legorouter}