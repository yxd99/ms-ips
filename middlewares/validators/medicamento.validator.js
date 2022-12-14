const { errors } = require("../../helpers");
const { medicamentoSchema, CONFIG_JOI } = require("../schemas");

exports.createDto = async(req, res, next) => {
    try{
        const { error } = medicamentoSchema.createMedicamento.validate(req.body, CONFIG_JOI);
        if(error) {
            const errorBody = error.details.map(e => e.message);
            throw errors.BAD_REQUEST(errorBody);
        }
        return next();
    }catch(e){
        next(e);
    }
}