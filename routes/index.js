const { Router } = require('express');
const { errors } = require('../helpers');

const router = Router();

router.use('/pacientes', require('./paciente.route'));

router.all('*', (req, res, next) => {
  try {
    throw errors.NOT_FOUND('Route doesnt exist');
  } catch (e) {
    next(e);
  }
});

module.exports = router;
