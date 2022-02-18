const mongoose = require('mongoose');

const schema = mongoose.Schema({
    valor: Number,
    descricao: String,
    status_movimento: String,
    data_insercao: String
});

module.exports = mongoose.model("caixa", schema);