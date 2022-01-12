//Modelo de la DB
const Order = require('../Initialization/Order');
const ListOrder = require('../Initialization/ListOrder');
const User = require('../Initialization/User');
const Product = require('../Initialization/Product');
const { Op, DATE } = require("sequelize");
const Sale = require('../Initialization/Sale');
const Bill = require('../Initialization/Bill');


async function createOrder(req, res, total){
    return await Order.create({
        id_cuenta: req.user,
        id_usuario: req.user,
        direccion: req.body.direccion,
        no_tarjeta: req.body.no_tarjeta,
        total: total,
        fecha: Date.now(),
        estado: 'En Revision',
        entregado: false
    });
}

async function getAllOrders(req, res){
    return await Order.findAll({
        where : {
            entregado: false
        },
        include: [{
            model: User,
            require: true
        }]
    });
}

async function getAllListOneOrder(req, res){
    console.log(req.params);
    return await Order.findOne({
        where: { 
            id_orden: req.params.id_orden
        },
        include: [{
            model: ListOrder,
            require: true,
            include: [{
                model: Product,
                required: true
            }]
        },{
            model: User,
            require: true
        }]
    });
}

async function genFactura(req, res){
    const id_order = req.body.id_order;
    let listOrders = await ListOrder.findAll({where: {id_orden: id_order}})
    let bill = await Bill.create({
        cuenta_efectiva: req.body.id_cuenta,
        fecha: Date.now(),
        total: req.body.total,
        id_cuenta: req.body.id_cuenta,
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
    return res.status(200).json({message: "Se proceso correctamente la factura"});
}

async function deleteOrder(req, res){
    console.log(req.params);
    await Order.update({
        entregado: true,
        estado: 'Rechazado'
    },{
        where: {
            id_orden: req.params.id_order
        }
    });

    return res.status(200).json({message: "La orden fue rechazada"});
}



module.exports = {
    createOrder,
    getAllOrders,
    getAllListOneOrder,
    genFactura,
    deleteOrder
}