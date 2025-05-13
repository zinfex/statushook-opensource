const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.criar = async (dados) => {
  const hash = await bcrypt.hash(dados.password, 10);
  dados.password = hash;
  return await Usuario.create(dados);
};

exports.buscarPorId = async (id, usuarioId) => {
  return await Usuario.findOne({ _id: id, usuario: usuarioId });
};

exports.login = async (email, senha) => {
  const usuario = await Usuario.findOne({ email }).select("+password");

  if (!usuario) {
    throw new Error("Usuário não encontrado");
  }

  const senhaCorreta = await bcrypt.compare(senha, usuario.password);
  if (!senhaCorreta) {
    throw new Error("Senha inválida");
  }

  const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });

  const usuarioSemSenha = {
    id: usuario._id,
    name: usuario.name,
    email: usuario.email,
  };

  return { usuario: usuarioSemSenha, token };
};
