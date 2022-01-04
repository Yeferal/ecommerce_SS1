const express = require('express');
const passport = require('passport');

const CardModel = require('../Model/Querys/CardModel');
const SimulationBank = require('./SimulatorBank');
const WalletController = require('./WalletController');

const ExternalAccount = {};

ExternalAccount.CardView = async (req,res)=>{    
    //regresar vista     
}

ExternalAccount.addCardView = async (req,res)=>{
    //regresar vista agregar tarjeta
}


ExternalAccount.getCards = async(req,res)=>{
    const tarjeta = await CardModel.cards(req);
    // console.log('entro',tarjeta);
    res.json(tarjeta);
}

ExternalAccount.addCard = async (req,res) =>{  
    console.log(req.body);  
    const card = await CardModel.existCard(req);
    if(card == undefined){
        if(SimulationBank.bankResponse){
            await CardModel.createCard(req);
            res.json({});
            //mensaje exito
        }else{
            //mensaje credito rechazado
            res.json({message:"tarjeta ha sido rechazada por el banco"});
        }
    }else{
        //tarjeta ya existe
        res.json({message:"La tarjeta ya existe"});
    }
}

ExternalAccount.deleteCard = async (req,res) =>{
    await CardModel.deleteCard(req);
    res.json({});
}

ExternalAccount.addCredit = async (req,res) =>{
    const card = await CardModel.existCard(req);
    if(card != undefined){
        if(SimulationBank.bankResponse){
            await WalletController.addCredit(req,res);
            res.json({message:"mensaje exito"});
            //mensaje exito
        }else{
            res.json({message:"mensaje credito rechazado"});
            //mensaje credito rechazado
        }
    }else{
        res.json({message:"tarjeta no existe"});
        //tarjeta no existe
    }
}

module.exports = ExternalAccount;
