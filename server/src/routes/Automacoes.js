const express = require('express');
const automacoesRouter = express.Router();
const AutomacaoController = require('../controllers/AutomacaoController');

automacoesRouter.post('/', AutomacaoController.criarAutomacao);
automacoesRouter.get('/', AutomacaoController.listarAutomacoes);
automacoesRouter.get('/:id', AutomacaoController.buscarPorId);
automacoesRouter.put('/:id', AutomacaoController.atualizar);
automacoesRouter.delete('/:id', AutomacaoController.deletar);

module.exports = automacoesRouter;