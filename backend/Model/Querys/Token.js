const TokenModel = require('../Initialization/VerificationToken');

async function create(id_cuenta, token, fecha_creacion, fecha_actualizado){
    return await TokenModel.create({
        id_cuenta: id_cuenta,
        token: token,
        fecha_creacion: fecha_creacion,
        fecha_actualizado: fecha_actualizado
    });
}

module.exports = {
    create
}