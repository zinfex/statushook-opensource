const mongoose = require('mongoose');

const automacaoSchema = new mongoose.Schema({
    name: String,
    description: String,
    webhook: String,
    status: String,
    frequency: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Automacao', automacaoSchema);