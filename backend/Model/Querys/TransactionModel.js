const Transaction = require('../Initialization/Transaction');

async function createTransaction(req,res){
    return await Transaction.create({
        cuenta_emisora: req.user,
        cuenta_receptora: req.body.cuenta_receptora,
        monto: req.body.monto,
        valisa: req.body.divisa,
        fecha: Date.now(),  
    })
}

async function buyTransaction(user,receptor,monto,divisa){
    return await Transaction.create({
        cuenta_emisora: user,
        cuenta_receptora: receptor,
        monto: monto,
        valisa: divisa,
        fecha: Date.now(),  
    })
}

module.exports = {
    createTransaction, buyTransaction
}