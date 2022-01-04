const express = require('express');
const passport = require('passport');

const ExchangeModel = require('../Model/Querys/ExchangeModel');

const ExchangeController = {};

ExchangeController.createExchange = async (req,res)=>{
    await ExchangeModel.createPostExchange(req,res);
}

ExchangeController.aceptExchange = async (req,res)=>{
    await ExchangeModel.changeState(req,res);
    await ExchangeModel.createExchange(req,res);
}

ExchangeController.cancelExchange = async (req,res)=>{
    await ExchangeModel.changeState(req,res);    
}

ExchangeController.requestExchange = async (req,res)=>{
    await ExchangeController.requestExchange(req,res);    
}

ExchangeController.myExchange = async (req,res)=>{
    await ExchangeController.myExchange(req,res);
}

module.exports = ExchangeController;