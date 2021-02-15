const restful = require('node-restful');
const mongoose = restful.mongoose;

const todoSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    isFinalizada: { type: Boolean, required: true, default: false },
    dataCriacao: {type: Date, default: Date.now}
});

module.exports = restful.model('Todo', todoSchema);