const { Op } = require('sequelize');
const { errors } = require('../helpers');
const db = require('../models');

class PacienteService {
    static async findAll(){
        const pacientes = await db.Pacientes.findAll();
        return pacientes;
    }

    static async findOne(id){
        const paciente = await db.Pacientes.findByPk(id);
        return paciente || {};
    }

    static async create(data){
        const _ = await this.findOne(data.documento);
        if(Object.keys(_).length !== 0) throw errors.BAD_REQUEST([`el documento ${data.documento} ya existe`]);
        await db.Pacientes.create(data);
        return {
            message: 'User has been created'
        };
    }
}

module.exports = PacienteService;