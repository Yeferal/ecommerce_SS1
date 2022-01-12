//Modelo de la DB
const Account = require('../Initialization/User');
const { Op } = require("sequelize");
const User = require('../Initialization/User');



async function createUser(req){
    return await User.create({
        id_cuenta: req.body.id_cuenta,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        fecha_nacimiento: req.body.fecha_nacimiento,
        telefono: req.body.telefono,
        correo: req.body.correo,  
    })
}

async function readUser(req){
    return await User.findOne({ where: {id_cuenta: req.body.user}});
}

async function updateUser(req){
    return await User.update({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        fecha_nacimiento: req.body.fecha_nacimiento,
        telefono: req.body.telefono,
        correo: req.body.correo,  
    });
}

async function deleteUser(req){
    
}


module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,

}
