const { PacienteService } = require("../services");
const { pacienteDto } = require("../dto");

exports.getAll = async (req, res, next) => {
    const pacientes = await PacienteService.findAll();
    res.json(pacientes);
};

exports.findOne = async (req, res, next) => {
    const { id: documento } = req.params;
    const paciente = await PacienteService.findOne(documento);
    res.json(paciente);
};

exports.create = async (req, res, next) => {
    try{
        const data = pacienteDto.create(req.body);
        const paciente = await PacienteService.create(data);
        res.status(201).json(paciente);
    }catch(e){
        next(e);
    }
};