'use strict';

exports.MEDICAMENTOS_TABLE = 'Medicamentos';

module.exports = async(sequelize, DataTypes) => {
  const Medicamento = sequelize.define(exports.MEDICAMENTOS_TABLE, {
    codigo: {
      type: DataTypes.STRING(10),
      unique: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  });
  await Medicamento.sync();
  return Medicamento;
};
