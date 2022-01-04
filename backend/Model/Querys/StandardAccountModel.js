//Modelo db
const StandardAccount = require('../Initialization/StandardAccount');

async function createAccount(req){
    return await StandardAccount.create({
        id_cuenta: req.body.id,
        cuenta_general: req.body.id,
        nombres: req.body.nombre,
        apellidos: req.body.apellido,
        fecha_nacimiento: req.body.fecha_nacimiento
    })
}

async function updateAccount(req,res){
    return await StandardAccount.update({            
        telefono: req.body.telefono,
        correo: req.body.correo,
        extension: req.body.extension,
        password: req.body.password
    }, {
        where: {
            id: req.user
        }
    }).then(result => {
        res.json(result);
    });
}

module.exports ={
    createAccount, updateAccount
}