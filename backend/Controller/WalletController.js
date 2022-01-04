const express = require('express');
const Wallet = require('../Model/Querys/WalletModel');

const WalletController = {};

WalletController.createWallet = async (req,res) => {
    const walletUser = await Wallet.existWallet(req , res);
    if(walletUser == undefined){
        await Wallet.createWallet(req,res);
    }
}

WalletController.addCredit = async (req,res) =>{
    return await WalletController.addCreditWallet(req.user, req.body.divisa, req.body.monto);
}

WalletController.withdrawalsCredit = async (req,res) =>{
    return await withdrawalsCreditWallet(req.user, req.body.divisa, req.body.monto);
}

WalletController.addCreditWallet = async (user, divisa, monto) =>{
    const walletUser = await Wallet.existWallet(user, divisa);
    if(walletUser == undefined){
        return await Wallet.createWallet(user, divisa, monto);
    }else{
        return await Wallet.addCredit(user, divisa, monto);
    }
}

WalletController.withdrawalsCreditWallet = async (user,divisa,monto) => {
    const walletUser = await Wallet.existWallet(user,divisa);
    if(walletUser == undefined){
        console.log("error");
    }else{
        return await Wallet.withdrawalsCredit(user,divisa,monto);
    }
}

WalletController.getWallet = async(req,res)=>{
    const walletUser = await Wallet.Wallets(req.user);
    res.json(walletUser);
}

module.exports = WalletController;