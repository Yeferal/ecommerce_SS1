//Modelo de la DB
const ListOrder = require('../Initialization/ListOrder');
const { Op } = require("sequelize");

async function createOneList(cart, id_order, req, res){
    return await ListOrder.create({
        id_orden: id_order,
        id_producto: cart.id_producto,
        precio_unitario: cart.precio,
        cantidad: cart.cantidad,
        sub_total: cart.cantidad * cart.precio
    });
}


module.exports = {
    createOneList
}
