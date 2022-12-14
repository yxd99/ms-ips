const Joi = require('joi');

exports.createMedicamento = Joi.object({
    codigo: Joi.string().required(),
    nombre: Joi.string().required(),
})