'use stric';

const db = require(".");

exports.PACIENTES_TABLE = 'Pacientes';

module.exports = (sequelize, DataTypes) => {
    const Paciente = sequelize.define(
        exports.PACIENTES_TABLE,
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
    return Paciente;
}