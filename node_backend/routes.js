const express = require('express');
const Caixa = require('./models/caixa');
const router = express.Router();

//Get teste
router.get('/', async (req, res) => {
    res.json({msg: 'Hello Word!'});
});
// Get all caixa
router.get('/caixas', async (req, res) => {

    const caixas = await Caixa.find();
    res.send(caixas);   
    
});
// Get entradas caixa
router.get('/caixas/entradas', async (req, res) => {

        
        const caixa = await Caixa.find({ status_movimento: 'entrada' });
        res.send(caixa); 

});
// Get saidas caixa
router.get('/caixas/saidas', async (req, res) => {
        
        const caixa = await Caixa.find({ status_movimento:'saida' });
        res.send(caixa); 

});
// Get total caixa
router.get('/caixas/total', async (req, res) => {
        
        const getEntrada = await Caixa.find({ status_movimento:'entrada' });
        const getSaida = await Caixa.find({ status_movimento:'saida' });
        var valorEntrada = 0;
        var valorSaida = 0;

        getEntrada.forEach((v, i)=>{
            valorEntrada += v.valor;
        });

        getSaida.forEach((v, i)=>{
            valorSaida += v.valor;
        });

        var total = valorEntrada - valorSaida;

        res.send({total: total}); 

});
// Get individual
router.get('/caixas/:id', async (req, res) => {
    try {
        
        const caixa = await Caixa.findOne({ _id: req.params.id });
        res.send(caixa); 

    } catch {

        res.status(404);
        res.send({ error: "Caixa GetOne não existe!" });

    }
});
// Post caixa
router.post('/caixas', async (req, res) => {
    
    const caixa = new Caixa({
        valor: req.body.valor,
        //valor_saida: req.body.valor_saida,
        descricao: req.body.descricao,
        status_movimento: req.body.status_movimento,
        data_insercao: req.body.data_insercao
    });

    await caixa.save();
    res.send(caixa);

});
// Update caixa
router.patch('/caixas/:id', async (req, res) => {
    try {
        const caixa = await Caixa.findOne({ _id: req.params.id });

        if(req.body.valor_entrada){
            caixa.valor_entrada = req.body.valor_entrada;
        }

        if(req.body.valor_saida){
            caixa.valor_saida = req.body.valor_saida;
        }

        if(req.body.descricao){
            caixa.descricao = req.body.descricao;
        }

        await caixa.save();
        res.send(caixa);

    } catch {

        res.status(404);
        res.send({ error: "Caixa update não existe!" });

    }
});
// Delete caixa
router.delete('/caixas/:id', async (req, res) => {
    try {

        await Caixa.deleteOne({ _id: req.params.id });
        res.status(204).send({msg:"deletado"});

    } catch {
        
        res.status(404);
        res.send({ error: "Caixa delete não existente!" })

    }
});

module.exports = router;