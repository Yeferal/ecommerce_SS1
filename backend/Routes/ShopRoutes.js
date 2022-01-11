//Express
const express = require('express');
const Router = express.Router();

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');

const ShopController = require('../Controller/ShopController');
const OrderController = require('../Controller/OrderController');

Router.use(isLoggedIn, ShopController.createCart);

Router.get('/cartAll',isLoggedIn,ShopController.getAll);

Router.delete('/cart/:id', isLoggedIn, ShopController.deletePost);

Router.post('/cart', isLoggedIn, ShopController.addProduct);

Router.delete('/cartAll', isLoggedIn, ShopController.deleteAll);

//Jajaja si lo use
Router.put('/cart',isLoggedIn, ShopController.updateCart);

Router.get('/totalCart',isLoggedIn, ShopController.totalCart);

//Finalizar Orden
Router.post('/buy',isLoggedIn, OrderController.buy);

module.exports = Router;