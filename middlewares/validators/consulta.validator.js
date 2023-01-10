const { errors } = require("../../helpers");
const { consultaSchema, CONFIG_JOI } = require("../schemas");

exports.createDto = async(req, res, next) => {
    try{
        const { error } = consultaSchema.createConsulta.validate(req.body, CONFIG_JOI);
        if(error){
            const errorBody = error.details.map(e => e.message);
            throw errors.BAD_REQUEST(errorBody);
        }
        return next();
    }catch(e){
        next(e);
    }
}