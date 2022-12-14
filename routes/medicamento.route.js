const { Router } = require('express');
const { MedicamentoController } = require('../controllers');
const { MedicamentoValidator } = require('../middlewares/validators');
const router = Router();

router.get('/', [], MedicamentoController.findAll);
router.get('/:codigo', [], MedicamentoController.findOne);
router.post('/', [MedicamentoValidator.createDto], MedicamentoController.create);

module.exports = router;