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





function total(req) {
    totalV = 0
    req.session.cart.forEach(cart => {
        cart.total = cart.precio * cart.cantidad;
        totalV += cart.total;
    });
    return totalV;
}

module.exports = OrderController;