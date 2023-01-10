const { Op } = require('sequelize');
const { errors } = require('../helpers');
const db = require('../models');

class ConsultaService {
    static async findAll(){
        const consultas = await db.Consultas.findAll();
        return consultas;
    }

    static async findOne(id){
        const consulta = await db.Consultas.findByPk(id);
        return consulta || {};
    }

    static async create(data){
        const _ = await db.Consultas.create(data);
        return {
            message: `se registo la consulta #${_.id}`
        }
    }
}

module.exports = ConsultaService;