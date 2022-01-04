const Exchange = require('../Initialization/Exchange');
const PostExchange = require('../Initialization/PostExchange');
const { OP } = require('sequelize');

async function createPostExchange(req, res) {    
    return await PostExchange.create({
        post: req.body.post,
        cantidad: req.body.cantidad,
        tipo: req.body.tipo,
        estado: true,
        id_user: req.user,
    });
}

async function createExchange(req, res) {
    return await Exchange.create({
        fecha: Date.now(),
        id_propuesta: req.body.id
    })
}

async function postExchange(req, res) {
    return PostExchange.findAll({
        include: [{
            model: Post,
            required: true,
            include: [{
                model: Article,
                required: true
            }]
        }],
        where: {
            id_user: req.user
        }
    })
}

async function requestExchange(req, res) {
    return PostExchange.findAll({
        include: [{
            model: Post,
            required: true,
            include: [{
                model: Article,
                required: true
            }],
            where: {
                cuenta: req.user
            }
        }],
    })
}

async function changeState(req, res) {
    return await PostExchange.update({
        estado: false
    }, {
        where: {
            id_intercambio: req.body.id
        }
    })
}

module.exports = {
    createPostExchange, createExchange, postExchange, requestExchange, changeState
}