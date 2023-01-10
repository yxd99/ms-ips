const { CONFIG_JOI } = require('./config');

module.exports = {
    CONFIG_JOI,
    pacienteSchema: require('./paciente.schema'),
    medicoSchema: require('./medico.schema'),
    consultaSchema: require('./consulta.schema'),
}