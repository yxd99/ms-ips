const fs = require('fs');
const path = require('path');
const logger = require('pino')();
const { Sequelize } = require('sequelize');

const db = {};
const basename = path.basename(__filename);
const dbConnection = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST === 'localhost' ? '127.0.0.1' : process.env.DB_HOST,
  port: 3306,
  dialect: 'mysql',
};
const sequelize = new Sequelize(dbConnection);
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((value) => {
  if (db[value].associate) db[value].associate(db);
});

sequelize.sync({ force: false, alter: true });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
