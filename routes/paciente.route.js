const { Router } = require('express');
const { PacienteController } = require('../controllers');
const { PacienteValidator } = require('../middlewares/validators');
const router = Router();

router.get('/', [], PacienteController.getAll);
router.get('/:id', [], PacienteController.findOne);
router.post('/', [PacienteValidator.createDto], PacienteController.create);
/* router.patch('/', [], UserController.update);
router.delete('/', [], UserController.update); */

module.exports = router;