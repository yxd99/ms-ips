'use stric';

const db = require(".");
const Consultas = require("./consulta.model");

exports.MEDICOS_TABLE = 'Medicos';

module.exports = (sequelize, DataTypes) => {
    const Medico = sequelize.define(
        exports.MEDICOS_TABLE,
        {
            nombre: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            apellido: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            documento: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                primaryKey: true,
            },
        }
    )
    return Medico;
}