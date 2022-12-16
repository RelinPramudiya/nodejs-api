// (3) validator input data registrasi dan login
const Joi = require('@hapi/joi')

const registerValidation = (data) => {
    const schema = Joi.object({
        weapon: Joi.string().required(),
        ammo: Joi.string().required(),
        tipe: Joi.string().required()
    })

    return schema.validate(data)
}

const loginValidation = (data) => {
    const schema = Joi.object({
        ammo: Joi.string().required(),
        tipe: Joi.string().required()
    })

    return schema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation