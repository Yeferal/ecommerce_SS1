//expres
const express = require('express');
//db
const Sale = require('../Model/Initialization/Sale');
const Bill = require('../Model/Initialization/Bill');
const Order = require('../Model/Initialization/Order');
const ListOrder = require('../Model/Initialization/ListOrder');
const User = require('../Model/Initialization/User');
const Account = require('../Model/Initialization/Account');
const Product = require('../Model/Initialization/Product');
const { Op } = require("sequelize");

const ReportController = {};

ReportController.getReportSales = async (req, res) => {
    const report = await Sale.findAll({
        include: [{
            model: Bill,
            required: true,
            where: {fecha: {[Op.lte]: req.params.fecha}}
        },{
            model: Product,
            required: true,
        }]
    });
    return res.status(200).json(report);
}

ReportController.getReportBills= async (req, res) => {
    const report = await Bill.findAll({
        where: {fecha: {[Op.lte]: req.params.fecha}},
        include: [{
            model: User,
            required: true
        }]
    });
    return res.status(200).json(report);
}

ReportController.getReportUser = async (req, res) => {
    const report = await Account.findAll({
        where: {fecha_creacion: {[Op.lte]: req.params.fecha}},
        include: [{
            model: User,
            required: true
        }]
    });
    return res.status(200).json(report);
}

ReportController.getReportOrders = async (req, res) => {
    const report = await Order.findAll({
        where: {fecha: {[Op.lte]: req.params.fecha}},
        include: [{
            model: User,
            required: true
        }]
    });
    return res.status(200).json(report);
}


module.exports = ReportController;