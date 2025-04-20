const AutomacaoService = require("../services/AutomacaoService");

exports.criarAutomacao = async (req, res) => {
  try {
    const nova = await AutomacaoService.criar(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listarAutomacoes = async (req, res) => {
  try {
    const automacoes = await AutomacaoService.listar(req.body.usuario);
    res.status(200).json(automacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.buscarPorId = async (req, res) => {
  try {
    const automacao = await AutomacaoService.buscarPorId(
      req.params.id,
      req.body.usuario
    );
    res.status(200).json(automacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.atualizar = async (req, res) => {
  try {
    const automacao = await AutomacaoService.atualizar(req.params.id, req.body);
    res.status(200).json(automacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletar = async (req, res) => {
  try {
    const automacao = await AutomacaoService.deletar(
      req.params.id,
      req.body.usuario
    );
    res.status(200).json(automacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
