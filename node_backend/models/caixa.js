const mongoose = require('mongoose');

const schema = mongoose.Schema({
    //id: ObjectId,
    valor_entrada: Number,
    valor_saida: Number,
    descricao: String,
    status_movimento: Number,
    data_insercao: Date
});

module.exports = mongoose.model("caixa", schema);