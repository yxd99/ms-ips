'use stric';

exports.PACIENTES_TABLE = 'Pacientes';

module.exports = async (sequelize, DataTypes) => {
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
    await Paciente.sync()
    return Paciente;
}