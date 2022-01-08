//Modelo de la DB
const Account = require('../Initialization/Account');
const { Op } = require("sequelize");


async function createAccountLogger(req, pass){
    return await Account.create({
        id_cuenta: req.body.id_cuenta,
        user: req.body.user,
        fecha_creacion: Date.now(),
        password: pass,
        verificado: false,
        activa: true
    });
}

async function readUserLoggedInformation(req){
    return await Account.findOne({where:{id_cuenta:req.user}});
}

function updateAccount(req,res){
    Account.update({
        fecha_creacion: req.body.fecha_creacion,
        password: req.body.password
    }, {
        where: {
            id_cuenta: req.user
        }
    });
}


async function deleteAccount(req, res){
    return await Account.update({
        activa:false
    },{
        id_cuenta: req.user
    });
}

module.exports = {
    deleteAccount, 
    updateAccount, 
    createAccountLogger,
    // readUserStandardLoggedInformation, 
    // readUserBussinesLoggedInformation, 
    readUserLoggedInformation, 
    // searchUserByPK, 
    // returnAccounts, 
    // allUser, oneUser,
    // oneUserStardad,
    // oneUserBussines,
    // returnUnitUser
}