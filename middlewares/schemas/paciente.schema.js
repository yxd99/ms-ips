const Joi = require('joi');

exports.createPaciente = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    documento: Joi.string().required(),
})