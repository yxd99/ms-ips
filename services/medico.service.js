const { Op } = require('sequelize');
const { errors } = require('../helpers');
const db = require('../models');

class MedicoService {
    static async findAll(){
        const medicos = await db.Medicos.findAll();
        return medicos;
    }

    static async findOne(id){
        const medico = await db.Medicos.findByPk(id);
        return medico || {};
    }

    static async create(data){
        const _ = await this.findOne(data.documento);
        if(Object.keys(_).length !== 0) throw errors.BAD_REQUEST([`el documento ${data.documento} ya existe`]);
        await db.Medicos.create(data);
        return {
            message: 'Medico has been created'
        };
    }
}

module.exports = MedicoService;