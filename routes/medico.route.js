const { Router } = require('express');
const { MedicoController } = require('../controllers');
const { MedicoValidator } = require('../middlewares/validators');
const router = Router();

router.get('/', [], MedicoController.getAll);
router.get('/:id', [], MedicoController.findOne);
router.post('/', [MedicoValidator.createDto], MedicoController.create);

module.exports = router;