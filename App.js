import express from "express";
import mongoose from "mongoose";
import {Legorouter} from './routes/legoRoutes.js';

const app = express();
app.use(express.json())

app.use('/lego', Legorouter)


mongoose.connect('mongodb://localhost:27017/legosPtas').then(()=>{
    console.log("conectou")
}).catch(err => {
    console.error("nao foi possivel a conexao ", err)
})

app.listen(3030, () =>{
    console.log("rodando mongo")
})

