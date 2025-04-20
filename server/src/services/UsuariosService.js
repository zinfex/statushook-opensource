const Usuario = require("../models/Usuario");

exports.criar = async (dados) => {
  return await Usuario.create(dados);
};
exports.buscarPorId = async (id, usuarioId) => {
  return await Usuario.findOne({ _id: id, usuario: usuarioId });
};
