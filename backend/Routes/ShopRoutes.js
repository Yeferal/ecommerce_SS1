//Express
const express = require('express');
const Router = express.Router();

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');

const ShopController = require('../Controller/ShopController');
const TransactionController = require('../Controller/TransactionCotroller');
const Transaction = require('../Model/Initialization/Transaction');

Router.use(isLoggedIn,ShopController.createCart);

Router.get('/CartAll',isLoggedIn,ShopController.getAll);

Router.delete('/Cart/:id', isLoggedIn, ShopController.deletePost);

Router.post('/Cart', isLoggedIn, ShopController.addPost);

Router.delete('/CartAll', isLoggedIn, ShopController.deleteAll);

Router.patch('/Cart',isLoggedIn, ShopController.updateCart);

Router.get('/Shop', ShopController.getAll);

Router.get('/totalCart',isLoggedIn, ShopController.totalCart);

Router.post('/Buy',isLoggedIn, ShopController.buy);

Router.post('/transaction',isLoggedIn, TransactionController.transaction);

Router.get('/ventas', isLoggedIn, ShopController.getVentas);

Router.get('/compras', isLoggedIn, ShopController.getCompras);

module.exports = Router;