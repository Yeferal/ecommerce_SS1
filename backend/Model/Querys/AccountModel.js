//Modelo de la DB
const Account = require('../Initialization/Account');
const StandardAccount = require('../Initialization/StandardAccount');
const BusinessAccount = require('../Initialization/BusinessAccount');
const Wallet = require('../Initialization/Wallet')
const { Op } = require("sequelize");

async function createAccountLogger(req, pass){
    return await Account.create({
        id_cuenta: req.body.id,
        user: req.body.user,
        fecha_creacion: Date.now(),
        pais: req.body.pais,
        telefono: req.body.telefono,
        correo: req.body.correo,
        extension: req.body.extension,
        password: pass,
        verificado: false,
        activa: true
    }).then(
        await Wallet.create({
            cuenta: req.body.id,
            divisa: "USD",
            monto: 0
        })
    );
}

async function readUserStandardLoggedInformation(req){
    return await Account.findOne({
        where:{
            id_cuenta:req.user
        },
        include:[{
            model: StandardAccount,
            required: true           
        }]
    });
}

async function readUserBussinesLoggedInformation(req){
    return await Account.findOne({
        where:{
            id_cuenta:req.user
        },
        include:[{
            model: StandardAccount,
            model: BusinessAccount,
            required: true           
        }]
    });
}

async function readUserBussinesLoggedInformation(req){
    return await Account.findOne({
        where:{
            id_cuenta:req.user
        },
        include:[{
            model: BusinessAccount,
            required: true           
        }]
    });
}

async function deleteAccount(req, res){
    return await Account.update({
        activa:false
    },{
        id_cuenta: req.user
    });
}

async function readUserLoggedInformation(req){
    return await Account.findOne({where:{id_cuenta:req.user}});
}

async function deleteAccount(req, res){
    return await Account.update({
        activa: false       
    },{
        where:{
            id_cuenta: req.user
        }
    })
}

async function searchUserByPK(idUser){
    return await Account.findOne({
        where: {
            id_cuenta: idUser
        }
    });
}

async function unitUserByReq(req, res){
    return await Account.findOne({
        where: {
            id_cuenta: req.body.id_cuenta
        }
    })
}

const returnUnitUser = async(req, res) => {
    try {
        return await unitUserByReq(req,res);
    } catch(error){
        return res.status(500).send(error.message);
    }
}


function updateAccount(req,res){
    Account.update({
        fecha_creacion: req.body.fecha_creacion,
        pais: req.body.pais,
        telefono: req.body.telefono,
        correo: req.body.correo,
        extension: req.body.extension,
        password: req.body.password
    }, {
        where: {
            id_cuenta: req.user
        }
    });
}


async function searchAccounts(){
    return await Account.findAll();
}

async function allUser(req,res){
    return await Account.findAll({
        attributes: { exclude: ['password'] },
        where:{
            activa: true,
            [Op.not]:[
                {id_cuenta: req.user}
            ]
        },
        include:[{
            model: StandardAccount,
            model: BusinessAccount
            //required:true
        }]
    })
}

async function oneUser(req,res){
    return await Account.findOne({
        attributes: { exclude: ['password'] },
        where:{
            activa: true,
            // id_cuenta: req.body.id,
            id_cuenta: req.params.id,
            [Op.not]:[
                {id_cuenta: req.user}
            ]
        },
        include:[{
            model: StandardAccount,
            model: BusinessAccount,
            required: true   
        }]
    })
}

async function oneUserStardad(req,res){
    return await Account.findOne({
        attributes: { exclude: ['password'] },
        where:{
            activa: true,
            id_cuenta: req.params.id,
            [Op.not]:[
                {id_cuenta: req.user}
            ]
        },
        include:[{
            model: StandardAccount,
            required: true 
        }]
    })
}

async function oneUserBussines(req,res){
    return await Account.findOne({
        attributes: { exclude: ['password'] },
        where:{
            activa: true,
            id_cuenta: req.params.id
        },
        include:[{
            model: BusinessAccount,
            required: true 
        }]
    })
}

const returnAccounts = async(req, res) => {
    try {
        const Account = await searchAccounts();
        return res.status(200).json({Account});
    } catch(error){
        return res.status(500).send(error.message);
    }
}


async function unitUserByReq(req, res){
    return await Account.findOne({
        where: {
            id_cuenta: req.body.id_cuenta
        }
    })
}



module.exports = {
    deleteAccount, 
    updateAccount, 
    createAccountLogger,
    readUserStandardLoggedInformation, 
    readUserBussinesLoggedInformation, 
    readUserLoggedInformation, 
    searchUserByPK, 
    returnAccounts, 
    allUser, oneUser,
    oneUserStardad,
    oneUserBussines,
    returnUnitUser
}
