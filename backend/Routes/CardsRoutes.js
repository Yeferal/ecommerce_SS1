//Express
const express = require('express');
const ExternalAccount = require('../Controller/CardsController');
const Router = express.Router();

//Controlador
const ExternAccount = require('../Controller/CardsController');

//Control inicio de sesion
const {isLoggedIn} = require('../Lib/auth');

//Rutas
Router.get('/cards',isLoggedIn, ExternAccount.CardView);

Router.get('/addCard',isLoggedIn, ExternalAccount.addCardView);

Router.post('/addCard', isLoggedIn, ExternalAccount.addCard);

Router.delete('/cards/:tarjeta', isLoggedIn, ExternalAccount.deleteCard);

Router.get('/myCards', isLoggedIn, ExternalAccount.getCards);

Router.post('/addCredit',isLoggedIn, ExternalAccount.addCredit);

Router.get('/userCards', isLoggedIn, ExternalAccount.getCards);

module.exports = Router;
