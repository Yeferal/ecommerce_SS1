//expres
const express = require('express');
const ListOrderModel = require('../Model/Querys/ListOrderModel');
const OrderModel = require('../Model/Querys/OrderModel');

const OrderController = {};

OrderController.buy = async (req, res) => {
    totalV = total(req)+35;
    order = await OrderModel.createOrder(req, res, totalV);
    // console.log('Nueva Orden',order.id_orden);
    succes = true;
    await req.session.cart.forEach(cart => {
        lisOr = ListOrderModel.createOneList(cart, order.id_orden, req, res);
        if(!lisOr){
            succes = false;
        }
    });
    // console.log(succes);
    if (!succes) {
        return res.json({message: "Ocurrio un problema con su pedido"});
    }
    req.session.cart = [];
    return res.json({message: "Su pedido se esta procesando"});
}

OrderController.genFactura = async (req, res) => {
    return await OrderModel.genFactura(req, res);
}

OrderController.deleteOrder = async (req, res) => {
    return await OrderModel.deleteOrder(req, res);
}

function total(req) {
    totalV = 0
    req.session.cart.forEach(cart => {
        cart.total = cart.precio * cart.cantidad;
        totalV += cart.total;
    });
    return totalV;
}

OrderController.getAllOrders = async (req, res) => {
    listOrders = await OrderModel.getAllOrders();
    return res.status(200).json(listOrders);
}

OrderController.getAllListOneOrders = async (req, res) => {
    listOneOrder = await OrderModel.getAllListOneOrder(req, res);
    return res.status(200).json(listOneOrder);
}


module.exports = OrderController;