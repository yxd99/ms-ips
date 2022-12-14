const Joi = require('joi');

exports.createMedico = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    documento: Joi.string().required(),
})