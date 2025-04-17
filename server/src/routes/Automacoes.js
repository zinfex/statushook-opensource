const express = require('express');
const router = express.Router();
const AutomacaoController = require('../controllers/AutomacaoController');

router.post('/', AutomacaoController.criarAutomacao);
router.get('/', AutomacaoController.listarAutomacoes);
router.get('/:id', AutomacaoController.buscarPorId);
router.put('/:id', AutomacaoController.atualizar);
router.delete('/:id', AutomacaoController.deletar);

module.exports = router;