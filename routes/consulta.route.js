const { Router } = require('express');
const { ConsultaController } = require('../controllers');
const { ConsultaValidator } = require('../middlewares/validators');

const router = Router();

router.get('/', [], ConsultaController.getAll);
router.get('/:id', [], ConsultaController.findOne);
router.post('/', [ConsultaValidator.createDto], ConsultaController.create);

module.exports = router;