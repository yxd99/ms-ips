'use stric';

exports.MEDICOS_TABLE = 'Medicos';

module.exports = async (sequelize, DataTypes) => {
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
    await Medico.sync()
    return Medico;
}