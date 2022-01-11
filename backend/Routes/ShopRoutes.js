//Express
const express = require('express');
const Router = express.Router();

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');

const ShopController = require('../Controller/ShopController');

Router.use(isLoggedIn, ShopController.createCart);

Router.get('/CartAll',isLoggedIn,ShopController.getAll);

Router.delete('/Cart/:id', isLoggedIn, ShopController.deletePost);

Router.post('/Cart', isLoggedIn, ShopController.addProduct);

Router.delete('/CartAll', isLoggedIn, ShopController.deleteAll);

//Talvez no lo use
Router.patch('/Cart',isLoggedIn, ShopController.updateCart);

Router.get('/totalCart',isLoggedIn, ShopController.totalCart);

//Finalizar Orden
// Router.post('/Buy',isLoggedIn, ShopController.buy);

module.exports = Router;