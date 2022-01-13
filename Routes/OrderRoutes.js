//Express
const express = require('express');
const ListOrderController = require('../Controller/ListOrderController');
const OrderController = require('../Controller/OrderController');
const ReportController = require('../Controller/ReportController')
const AutoController = require('../Controller/AutoController')
const Router = express.Router();

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');


Router.get('/allOrders',OrderController.getAllOrders);
Router.get('/allListOrder/:id_orden', OrderController.getAllListOneOrders)
Router.post('/ending-order', OrderController.genFactura)
Router.delete('/order/:id_order', OrderController.deleteOrder)

Router.get('/report-sales/:fecha', ReportController.getReportSales);

Router.get('/report-bills/:fecha', ReportController.getReportBills);

Router.get('/report-user/:fecha', ReportController.getReportUser);

Router.get('/report-orders/:fecha', ReportController.getReportOrders);


Router.get('/connect',(req, res) =>{
    console.log('dio')
    return res.status(200).json(true);
});

Router.get('/auto', AutoController.isExiste, AutoController.createAuto);

Router.post('/auto', AutoController.updateAuto);

module.exports = Router;