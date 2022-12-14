const { Op } = require('sequelize');
const { errors } = require('../helpers');
const db = require('../models');

class MedicamentoService {
    static async findAll(){
        const medicamentos = await db.Medicamentos.findAll();
        return medicamentos;
    }

    static async findOne(id){
        const medicamento = await db.Medicamentos.findByPk(id);
        return medicamento || {};
    }

    static async create(data){
        const _ = await this.findOne(data.codigo);
        if(Object.keys(_).length !== 0) throw errors.BAD_REQUEST([`ya existe un medicamento con el código ${data.codigo}`]);
        await db.Medicamentos.create(data);
        return {
            message: 'Medicamento has been created'
        };
    }
}

module.exports = MedicamentoService;