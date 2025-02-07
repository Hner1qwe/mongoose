import { legosModel } from "../models/lego.js";


//adicina "lego" 
const addLego = async (req, res) => {
    const { nome, pecas, preco } = req.body;

    if (!nome || !pecas || !preco) {
        return res.json({
            erro: true,
            mensagem: "Falta informação",
        });
    }

    try {
        const lego = new legosModel({ nome, pecas, preco });
        await lego.save();

        return res.json({
            erro: false,
            mensagem: "LEGO adicionado",
        });
    } catch (error) {
        return res.json({
            erro: true,
            mensagem: "Erro ao salvar",
        });
    }
};

//faz pesquisa por parametros como id
const buscarlegos = async (req, res) => {
    const { id } = req.params;

    //findById é uma função que acha diretamente o id do item q eu preciso
    const legos = await legosModel.findById(id);


    if (legos) {
        res.json({
            erro: false,
            legos,
        });
    } else {
        res.json({
            erro: true,
            mensagem: "não encontrado",
        });
    }
};


// get comum, funciona como qualquer outro, lista os itens do 'banco' ou dos arrays
const listarlegos = async (req, res) => {
    try {
        const legos = await legosModel.find();
        res.json({
            erro: false,
            legos,
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: "nao achou",
        });
    }

}


//metodo put... demorei muito pra pensar como fazer esse mas no geral só foram algumas tentativas sem usar o findById
// criei a função finder para ser mais facil de encontrar os itens 
const atualizar = async (req, res) => {
    const { id } = req.params;


    const finder = await legosModel.findById(id);

    if (finder) {

        const { nome, pecas, preco } = req.body;

        finder.nome = nome;
        finder.pecas = pecas;
        finder.preco = preco;

        await finder.save();

        res.json({
            erro: false,
            mensagem: "atualizou",
            legos: finder
        });
    } else {

        res.json({
            erro: true,
            mensagem: "não encontrado"
        });
    }
};


//delete simples ultilizando as funções conhecidas e usadas anteriormente
const deletarLego =  async (req, res) => {
    const {id} = req.params;

    
        const resultado = await legosModel.findByIdAndDelete(id);

        if (resultado) {  
            res.json({
                erro: false,
                mensagem: "deletado"
            });
        } else {
            res.json({
                erro: true,
                mensagem: "não achou"
            });
        }
     
};


export { addLego, buscarlegos, listarlegos, atualizar, deletarLego };
