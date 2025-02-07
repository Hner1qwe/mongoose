import express from 'express'

const Legorouter = express.Router();
import {addLego, buscarlegos} from '../controller/legoController.js'


Legorouter.post('/', addLego)
Legorouter.get('/', buscarlegos)


export{Legorouter}