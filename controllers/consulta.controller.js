const { consultaDto } = require("../dto");
const { ConsultaService } = require("../services")

exports.getAll = async(req, res, next) => {
    const consultas = await ConsultaService.findAll();
    res.json(consultas);
}

exports.findOne = async(req, res, next) => {
    const { id } = req.params;
    const consulta = await ConsultaService.findOne(id);
    res.json(consulta);
}

exports.create = async(req, res, next) => {
    try{
        const data = consultaDto.create(req.body);
        const consulta = await ConsultaService.create(data);
        res.status(201).json(consulta);
    }catch(e){
        next(e);
    }
}