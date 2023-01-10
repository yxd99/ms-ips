'use strict';
exports.CONSULTA_TABLE = 'Consultas';

module.exports = (sequelize, DataTypes) => {
    const Consulta = sequelize.define(exports.CONSULTA_TABLE, {
        motivo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        medicamentos: {
            type: DataTypes.TEXT,
            allowNull: true,
            default: 'No suministrado'
        },
        ayudasDiagnosticas: {
            type: DataTypes.TEXT,
            allowNull: true,
            default: 'No suministrado'
        }
    });

    Consulta.associate = (models) => {
        Consulta.belongsTo(models.Medicos, { foreignKey: 'MedicoId'});
        Consulta.belongsTo(models.Pacientes, { foreignKey: 'PacienteId'});
    }

    return Consulta;
}