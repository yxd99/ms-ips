require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('pino')();
const pino = require('pino-http')();

const routes = require('./routes');
const { errors } = require('./middlewares');
const app = express();

const port = process.env.PORT || 3000;
const prefix = process.env.PREFIX || 'api';

app.use(pino);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(`/${prefix}`, routes);

app.use(errors.handle);

app.listen(port, async () => {
  logger.info(`Running app in port ${port}`)
});
