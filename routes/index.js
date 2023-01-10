const fs = require('fs');
const path = require('path');
const logger = require('pino')();
const { Router } = require('express');
const { errors } = require('../helpers');
const basename = path.basename(__filename);

const router = Router();

fs.readdirSync(__dirname).filter(
  (file) =>
    file.indexOf('.') !== 0 && file !== basename && file.slice(-9) === '.route.js'
).forEach(route => {
  const nameRoute = route.slice(0, -9);
  logger.info(`[MAP] Route load: ${nameRoute}s`);
  router.use(`/${nameRoute}s`, require(`./${nameRoute}.route`));
})

router.all('*', (req, res, next) => {
  try {
    throw errors.NOT_FOUND('Route doesnt exist');
  } catch (e) {
    next(e);
  }
});

module.exports = router;
