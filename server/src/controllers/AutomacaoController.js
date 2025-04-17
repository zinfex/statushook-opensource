const AutomacaoService = require('../services/AutomacaoService');

exports.criarAutomacao = async (req, res) => {
    try {
        const nova = await AutomacaoService.criar(req.body, req.user.id);
        res.status(201).json(nova);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.listarAutomacoes = async (req, res) => {
    try {
        const nova = await AutomacaoService.listar(req.user.id);
        res.status(201).json(nova);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.buscarPorId = async (req, res) => {
    try {
        const nova = await AutomacaoService.buscarPorId(req.body.id, req.user.id);
        res.status(201).json(nova);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.atualizar = async (req, res) => {
    try {
        const nova = await AutomacaoService.atualizar(req.body.id, req.body, req.user.id);
        res.status(201).json(nova);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deletar = async (req, res) => {
    try {
        const nova = await AutomacaoService.deletar(req.body.id, req.user.id);
        res.status(201).json(nova);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}