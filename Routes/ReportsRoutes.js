//Express
const express = require('express');
const Router = express.Router();

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');
// const ReportController = require('../Controller/ReportController')

// Router.get('/report-sales/:fecha', ReportController.getReportSales);

// Router.get('/report-bills/:fecha', ReportController.getReportBills);

// Router.get('/report-user/:fecha', ReportController.getReportUser);

// Router.get('/report-orders/:fecha', ReportController.getReportOrders);

module.exports = Router;