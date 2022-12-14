const { MedicamentoService } = require('../services');
const { medicamentoDto } = require('../dto');

exports.findAll = async (req, res, next) => {
    const medicamentos = await MedicamentoService.findAll();
    res.json(medicamentos);
}

exports.findOne = async (req, res, next) => {
    const { codigo } = req.params;
    const medicamento = await MedicamentoService.findOne(codigo);
    res.json(medicamento);
}

exports.create = async (req, res, next) => {
    try{
        const data = medicamentoDto.create(req.body);
        const medicamento = await MedicamentoService.create(data);
        res.status(201).json(medicamento);
    }catch(e){
        next(e);
    }
}