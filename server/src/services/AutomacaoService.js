const Automacao = require('../models/Automacao');

exports.criar = async (dados, usuarioId) => {
    return await Automacao.create({ ...dados, usuario: usuarioId });
}

exports.listar = async (usuarioId) => {
    return await Automacao.find({ usuario: usuarioId });
}

exports.buscarPorId = async (id, usuarioId) => {
    return await Automacao.findOne({ _id: id, usuario: usuarioId });
}

exports.atualizar = async (id, dados, usuarioId) => {
    return await Automacao.findByIdAndUpdate(id, { ...dados, usuario: usuarioId }, { new: true });
}

exports.deletar = async (id, usuarioId) => {
    return await Automacao.findByIdAndDelete(id, { usuario: usuarioId });
}
