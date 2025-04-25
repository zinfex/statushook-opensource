const automacoes = require('../mocks/automacoes.json');

// Simular listar tudo
exports.listar = async () => {
  return automacoes;
};

// Simular buscar por ID
exports.buscarPorId = async (id) => {
  const automacao = automacoes.find(a => a.id === Number(id));
  return automacao || null;
};
