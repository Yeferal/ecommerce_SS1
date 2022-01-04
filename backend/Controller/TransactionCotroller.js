const express = require('express');

const WalletModel = require('../Model/Querys/WalletModel');
const TransactionModel = require('../Model/Querys/TransactionModel');
const WalletController = require('../Controller/WalletController');

const TransactionController = {};

TransactionController.transaction = async (req,res) => {
    const wallet = await WalletModel.existWallet(req.user, req.body.divisa);    
    if(wallet.monto >= req.body.monto){
        const transaction = await TransactionModel.createTransaction(req,res);
        const add = await WalletController.addCreditWallet(req.body.cuenta_receptora,req.body.divisa,req.body.monto);
        const drawals = await WalletController.withdrawalsCreditWallet(req.user,req.body.divisa,req.body.monto);
        res.json("si");
    }    
}

TransactionController.shop = async (user,receptor,divisa,monto) => {
    const wallet = await WalletModel.existWallet(user, divisa);    
    if(wallet.monto >= monto){
        const transaction = await TransactionModel.buyTransaction(user,receptor, monto, divisa);
        const add = await WalletController.addCreditWallet(receptor,divisa,monto);
        const drawals = await WalletController.withdrawalsCreditWallet(user,divisa,monto);
    }    
}

module.exports = TransactionController;