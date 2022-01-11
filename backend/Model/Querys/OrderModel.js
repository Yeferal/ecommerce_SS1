//Modelo de la DB
const Order = require('../Initialization/Order');
const { Op } = require("sequelize");


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


module.exports = {
    createOrder
}