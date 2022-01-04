//
const {Op} = require('sequelize');
//Modelo db
const Wallet = require('../Initialization/Wallet');

async function createWallet(user, divisa, monto){
    return await Wallet.create({
        cuenta: user,
        divisa: divisa,
        monto: monto
    })
}

async function addCredit(user, divisa, monto){
    return await Wallet.increment({
        'monto': monto
    },{
        where:{
            cuenta: user,
            divisa: divisa
        }
    })
}

async function withdrawalsCredit(user, divisa, monto){
    return await Wallet.increment({
        'monto': -monto
    },{
        where:{
            cuenta: user,
            divisa: divisa,
            monto:{
                [Op.gte]: monto
            }           
        }
    })
}

async function existWallet(user, divisa){
    return await Wallet.findOne({
        where:{
            cuenta: user,
            divisa: divisa
        }
    })
}

async function Wallets(user){
    return await Wallet.findOne({
        attributes: { exclude: ['id','cuenta'] },
        where:{
            cuenta: user
        }
    })
}

module.exports = {
    createWallet, addCredit, withdrawalsCredit, existWallet, Wallets
}
