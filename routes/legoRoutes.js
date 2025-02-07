import express from 'express'

const Legorouter = express.Router();
import {addLego, buscarlegos, listarlegos, atualizar, deletarLego} from '../controller/legoController.js'


Legorouter.post('/', addLego)
Legorouter.get('/:id', buscarlegos)
Legorouter.get('/', listarlegos)
Legorouter.put('/:id', atualizar)
Legorouter.delete('/:id', deletarLego)

export{Legorouter}