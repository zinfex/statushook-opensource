const express = require('express');
const testeAutomacoesRouter = express.Router();
const TestAutomacaoController = require('../controllers/TestAutomacaoController.js');

testeAutomacoesRouter.get('/', TestAutomacaoController.listarAutomacoes);
testeAutomacoesRouter.get('/:id', TestAutomacaoController.buscarPorId);
// testeAutomacoesRouter.post('/', AutomacaoController.criarAutomacao);
// testeAutomacoesRouter.put('/:id', AutomacaoController.atualizar);
// testeAutomacoesRouter.delete('/:id', AutomacaoController.deletar);

module.exports = testeAutomacoesRouter;