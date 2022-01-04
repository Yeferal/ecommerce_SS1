//Express
const express = require('express');
const Router = express.Router();

const {isLoggedIn} = require('../Lib/auth');
const ExchangeController = require('../Controller/ExchangeController');

Router.post('/Exchange',isLoggedIn, ExchangeController.createExchange);

Router.patch('/Exchange',isLoggedIn, ExchangeController.aceptExchange);

Router.delete('/Exchange',isLoggedIn,ExchangeController.cancelExchange);

Router.get('/Exchange',isLoggedIn,ExchangeController.requestExchange);

Router.get('/myExchange',isLoggedIn, ExchangeController.myExchange);

module.exports = Router;