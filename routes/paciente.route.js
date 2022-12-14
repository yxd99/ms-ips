const { Router } = require('express');
const { UserController } = require('../controllers');
const { PacienteValidator } = require('../middlewares/validators');
const router = Router();

router.get('/', [], UserController.getAll);
router.get('/:id', [], UserController.findOne);
router.post('/', [PacienteValidator.createDto], UserController.create);
/* router.patch('/', [], UserController.update);
router.delete('/', [], UserController.update); */

module.exports = router;