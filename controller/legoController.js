import { legosModel } from "../models/lego.js";

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
            mensagem: "LEGO adicionado com sucesso!",
        });
    } catch (error) {
        return res.json({
            erro: true,
            mensagem: "Erro ao salvar LEGO",
        });
    }
};

const buscarlegos = async (req, res) => {
    try {
        const legos = await legosModel.find();
        res.json({
            erro: false,
            legos,
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: "Erro ao buscar os legos",
        });
    }
}


export { addLego, buscarlegos};
