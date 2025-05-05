const express = require('express');
const testeAutomacoesRouter = express.Router();
const TestAutomacaoController = require('../controllers/TestAutomacaoController.js');

testeAutomacoesRouter.get('/', TestAutomacaoController.listarAutomacoes);
testeAutomacoesRouter.get('/:id', TestAutomacaoController.buscarPorId);

module.exports = testeAutomacoesRouter;