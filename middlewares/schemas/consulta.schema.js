const Joi = require('joi');

exports.createConsulta = Joi.object({
    motivo: Joi.string().required(),
    pacienteId: Joi.string().required(),
    medicamentos: Joi.string().optional(),
    ayudasDiagnosticas: Joi.string().optional(),
})