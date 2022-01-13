//expres
const express = require('express');
const ListOrderModel = require('../Model/Querys/ListOrderModel');
const OrderModel = require('../Model/Querys/OrderModel');
const Auto = require('../Model/Initialization/Auto');
const Order = require('../Model/Initialization/Order');
const ListOrder = require('../Model/Initialization/ListOrder');
const User = require('../Model/Initialization/User');
const Product = require('../Model/Initialization/Product');
const Sale = require('../Model/Initialization/Sale');
const Bill = require('../Model/Initialization/Bill');

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
    resultado = await Auto.findOne({where: {id: 1}});
    if (resultado) {
        if (resultado.auto) {
            // req.body.id_order = order.id_orden;
            // req.body.id_cuenta = order.id_cuenta;
            // req.body.total = order.total;
            

            const id_order = order.id_orden;
            let listOrders = await ListOrder.findAll({where: {id_orden: id_order}})
            let bill = await Bill.create({
                cuenta_efectiva: req.user,
                fecha: Date.now(),
                total: order.total,
                id_cuenta: req.user,
            });
            
            await listOrders.forEach(listOr => {
                Sale.create({
                    no_factura: bill.no_factura,
                    id_producto: listOr.id_producto,
                    precio_unitario: listOr.precio_unitario,
                    cantidad: listOr.cantidad,
                    total: listOr.cantidad * listOr.precio_unitario,
                    id_factura: bill.no_factura
                });
            });

            await Order.update({
                entregado: true,
                estado: 'Facturado'
            },{
                where: {
                    id_orden: id_order
                }
            });




        }
    }
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