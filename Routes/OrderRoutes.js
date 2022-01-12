//Express
const express = require('express');
const ListOrderController = require('../Controller/ListOrderController');
const OrderController = require('../Controller/OrderController');
const Router = express.Router();

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');


Router.get('/allOrders',OrderController.getAllOrders);
Router.get('/allListOrder/:id_orden', OrderController.getAllListOneOrders)
Router.post('/ending-order', OrderController.genFactura)
Router.delete('/order/:id_order', OrderController.deleteOrder)


module.exports = Router;